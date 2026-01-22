'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Plus, Edit, Trash2, Zap, AlertCircle, CheckCircle } from 'lucide-react';
import { useTheme } from '@/app/providers/ThemeProvider';

interface Transformation {
  _id: string;
  title: string;
  clientName: string;
  duration: string;
  metrics: string;
  beforeImage: string;
  afterImage: string;
  category: string;
  description: string;
  isFeatured: boolean;
  isActive: boolean;
}

const initialFormState: Omit<Transformation, '_id'> = {
  title: '',
  clientName: '',
  duration: '',
  metrics: '',
  beforeImage: '',
  afterImage: '',
  category: 'weight-loss',
  description: '',
  isFeatured: false,
  isActive: true,
};

export default function TransformationsPage() {
  const { theme } = useTheme();
  const [transformations, setTransformations] = useState<Transformation[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState(initialFormState);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    fetchTransformations();
  }, []);

  const fetchTransformations = async () => {
    try {
      const res = await fetch('/api/transformations');
      const data = await res.json();
      setTransformations(data.transformations || []);
    } catch (error) {
      console.error('Error fetching transformations:', error);
      setMessage({ type: 'error', text: 'Failed to load transformations' });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const url = '/api/transformations';
      const method = editingId ? 'PUT' : 'POST';
      const body = editingId ? { id: editingId, ...formData } : formData;

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        await fetchTransformations();
        closeModal();
        setMessage({
          type: 'success',
          text: editingId ? 'Transformation updated successfully!' : 'Transformation created successfully!',
        });
        setTimeout(() => setMessage(null), 3000);
      } else {
        const error = await res.json();
        setMessage({ type: 'error', text: error.error || 'Failed to save transformation' });
      }
    } catch (error) {
      console.error('Error saving transformation:', error);
      setMessage({ type: 'error', text: 'Failed to save transformation' });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this transformation?')) return;

    try {
      const res = await fetch(`/api/transformations?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        await fetchTransformations();
        setMessage({ type: 'success', text: 'Transformation deleted successfully!' });
        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage({ type: 'error', text: 'Failed to delete transformation' });
      }
    } catch (error) {
      console.error('Error deleting transformation:', error);
      setMessage({ type: 'error', text: 'Failed to delete transformation' });
    }
  };

  const openEditModal = (item: Transformation) => {
    setEditingId(item._id);
    setFormData({
      title: item.title,
      clientName: item.clientName,
      duration: item.duration,
      metrics: item.metrics,
      beforeImage: item.beforeImage,
      afterImage: item.afterImage,
      category: item.category,
      description: item.description,
      isFeatured: item.isFeatured,
      isActive: item.isActive,
    });
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setEditingId(null);
    setFormData(initialFormState);
  };

  if (loading) {
    return (
      <div className={`flex items-center justify-center min-h-[60vh]`}>
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>Loading transformations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`text-3xl font-bold flex items-center gap-2 ${
            theme === 'dark' ? 'text-white' : 'text-slate-900'
          }`}>
            <Zap className="w-8 h-8 text-emerald-500" />
            Transformations
          </h1>
          <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} mt-1`}>
            Manage before and after transformation galleries
          </p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white gap-2">
              <Plus className="w-4 h-4" />
              Add Transformation
            </Button>
          </DialogTrigger>

          <DialogContent className={`${
            theme === 'dark'
              ? 'bg-slate-800 border-slate-700'
              : 'bg-white border-slate-200'
          } max-w-2xl max-h-[90vh] overflow-y-auto`}>
            <DialogHeader>
              <DialogTitle className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                {editingId ? 'Edit Transformation' : 'Add New Transformation'}
              </DialogTitle>
              <DialogDescription className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                {editingId ? 'Update the transformation details' : 'Fill in the transformation details'}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                  Transformation Title
                </Label>
                <Input
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g., Amazing Weight Loss Journey"
                  required
                  className={theme === 'dark' ? 'bg-slate-700/50 border-slate-600 text-white' : ''}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                    Client Name
                  </Label>
                  <Input
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    placeholder="e.g., John Doe"
                    required
                    className={theme === 'dark' ? 'bg-slate-700/50 border-slate-600 text-white' : ''}
                  />
                </div>

                <div className="space-y-2">
                  <Label className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                    Duration
                  </Label>
                  <Input
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    placeholder="e.g., 6 months"
                    required
                    className={theme === 'dark' ? 'bg-slate-700/50 border-slate-600 text-white' : ''}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                    Category
                  </Label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className={`w-full px-3 py-2 rounded-md border ${
                      theme === 'dark'
                        ? 'bg-slate-700/50 border-slate-600 text-white'
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  >
                    <option value="weight-loss">Weight Loss</option>
                    <option value="pcod">PCOD</option>
                    <option value="fitness">Fitness</option>
                    <option value="nutrition">Nutrition</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                    Key Metrics
                  </Label>
                  <Input
                    value={formData.metrics}
                    onChange={(e) => setFormData({ ...formData, metrics: e.target.value })}
                    placeholder="e.g., 20kg loss, BMI -5.2"
                    className={theme === 'dark' ? 'bg-slate-700/50 border-slate-600 text-white' : ''}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                  Description
                </Label>
                <Textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Transformation journey and details"
                  rows={3}
                  className={theme === 'dark' ? 'bg-slate-700/50 border-slate-600 text-white' : ''}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                    Before Image URL
                  </Label>
                  <Input
                    value={formData.beforeImage}
                    onChange={(e) => setFormData({ ...formData, beforeImage: e.target.value })}
                    placeholder="https://example.com/before.jpg"
                    required
                    className={theme === 'dark' ? 'bg-slate-700/50 border-slate-600 text-white' : ''}
                  />
                </div>

                <div className="space-y-2">
                  <Label className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>
                    After Image URL
                  </Label>
                  <Input
                    value={formData.afterImage}
                    onChange={(e) => setFormData({ ...formData, afterImage: e.target.value })}
                    placeholder="https://example.com/after.jpg"
                    required
                    className={theme === 'dark' ? 'bg-slate-700/50 border-slate-600 text-white' : ''}
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <label className={`flex items-center gap-2 cursor-pointer ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <input
                    type="checkbox"
                    checked={formData.isFeatured}
                    onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                    className="rounded"
                  />
                  Featured
                </label>

                <label className={`flex items-center gap-2 cursor-pointer ${
                  theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                }`}>
                  <input
                    type="checkbox"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    className="rounded"
                  />
                  Active
                </label>
              </div>

              <DialogFooter>
                <Button type="button" variant="outline" onClick={closeModal}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={saving}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white"
                >
                  {saving ? 'Saving...' : editingId ? 'Update' : 'Create'}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {/* Messages */}
      {message && (
        <div className={`p-4 rounded-lg flex items-center gap-3 border ${
          message.type === 'success'
            ? theme === 'dark'
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
              : 'bg-emerald-50 border-emerald-200 text-emerald-700'
            : theme === 'dark'
            ? 'bg-red-500/10 border-red-500/30 text-red-400'
            : 'bg-red-50 border-red-200 text-red-700'
        }`}>
          {message.type === 'success' ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
          )}
          {message.text}
        </div>
      )}

      {/* Transformations Gallery */}
      {transformations.length === 0 ? (
        <Card className={theme === 'dark' ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'}>
          <CardContent className="pt-12 pb-12 text-center">
            <Zap className={`w-12 h-12 mx-auto mb-4 ${
              theme === 'dark' ? 'text-slate-600' : 'text-slate-400'
            }`} />
            <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
              No transformations found. Add your first transformation!
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {transformations.map((transformation) => (
            <Card key={transformation._id} className={`${
              theme === 'dark'
                ? 'bg-slate-800/50 border-slate-700 hover:border-emerald-500/50'
                : 'bg-white border-slate-200 hover:border-emerald-500'
            } transition-colors overflow-hidden flex flex-col`}>
              {/* Before/After Images */}
              <div className="relative h-40 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 grid grid-cols-2">
                  {transformation.beforeImage && (
                    <div className="relative overflow-hidden">
                      <img
                        src={transformation.beforeImage}
                        alt="Before"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-1 left-1 bg-black/60 px-2 py-1 rounded text-xs text-white font-medium">
                        Before
                      </div>
                    </div>
                  )}
                  {transformation.afterImage && (
                    <div className="relative overflow-hidden">
                      <img
                        src={transformation.afterImage}
                        alt="After"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-1 right-1 bg-emerald-600/60 px-2 py-1 rounded text-xs text-white font-medium">
                        After
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className={`text-base ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {transformation.title}
                    </CardTitle>
                    <CardDescription className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                      {transformation.clientName}
                    </CardDescription>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      size="md"
                      variant="outline"
                      onClick={() => openEditModal(transformation)}
                      className={theme === 'dark' ? 'border-slate-600 text-slate-400 hover:text-slate-300' : ''}
                    >
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      size="md"
                      variant="outline"
                      onClick={() => handleDelete(transformation._id)}
                      className={theme === 'dark' ? 'border-red-600 text-red-400 hover:text-red-300' : 'border-red-300 text-red-600 hover:text-red-700'}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  <Badge variant="outline" className={theme === 'dark' ? 'border-slate-600 text-slate-400' : ''}>
                    {transformation.category}
                  </Badge>
                  <Badge variant="outline" className={theme === 'dark' ? 'border-slate-600 text-slate-400' : ''}>
                    {transformation.duration}
                  </Badge>
                  {transformation.isFeatured && (
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
                      Featured
                    </Badge>
                  )}
                  {!transformation.isActive && (
                    <Badge variant="destructive" className="bg-red-500/10 text-red-400 border-red-500/30">
                      Inactive
                    </Badge>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex-1 space-y-2">
                {transformation.metrics && (
                  <div>
                    <p className={`text-xs font-semibold ${
                      theme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                    }`}>
                      Key Metrics
                    </p>
                    <p className={`text-sm font-medium ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {transformation.metrics}
                    </p>
                  </div>
                )}

                {transformation.description && (
                  <p className={`text-sm line-clamp-2 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {transformation.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
