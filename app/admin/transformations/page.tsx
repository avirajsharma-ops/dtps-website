'use client';

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Button from '@/components/ui/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { Plus, Edit, Trash2, Zap, AlertCircle, CheckCircle, X } from 'lucide-react';
import { useTheme } from '@/app/providers/ThemeProvider';
import ImageUpload from '@/components/admin/ImageUpload';

interface Transformation {
  _id: string;
  clientName: string;
  beforeImage: string;
  afterImage: string;
  weightLost: string;
  daysToAchieve: string;
  testimonial: string;
  page: 'weight-loss' | 'pcod' | 'therapeutic' | 'wedding';
  featured: boolean;
  isActive: boolean;
  order: number;
}

const initialFormState: Omit<Transformation, '_id'> = {
  clientName: '',
  beforeImage: '',
  afterImage: '',
  weightLost: '',
  daysToAchieve: '',
  testimonial: '',
  page: 'weight-loss',
  featured: false,
  isActive: true,
  order: 0,
};

const pageOptions = [
  { value: 'weight-loss', label: 'Weight Loss' },
  { value: 'pcod', label: 'PCOD' },
  { value: 'therapeutic', label: 'Therapeutic' },
  { value: 'wedding', label: 'Wedding' },
];

export default function TransformationsPage() {
  const { theme } = useTheme();
  const [transformations, setTransformations] = useState<Transformation[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState(initialFormState);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

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

    if (!formData.clientName.trim()) {
      setMessage({ type: 'error', text: 'Client name is required' });
      return;
    }

    if (!formData.weightLost.trim()) {
      setMessage({ type: 'error', text: 'Weight lost is required' });
      return;
    }

    if (!formData.daysToAchieve.trim()) {
      setMessage({ type: 'error', text: 'Days to achieve is required' });
      return;
    }

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
      clientName: item.clientName,
      beforeImage: item.beforeImage,
      afterImage: item.afterImage,
      weightLost: item.weightLost,
      daysToAchieve: item.daysToAchieve,
      testimonial: item.testimonial,
      page: item.page,
      featured: item.featured,
      isActive: item.isActive,
      order: item.order,
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
            Manage success stories with name, weight lost, and timeline
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
              {/* Client Name */}
              <div className="space-y-2">
                <label className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Client Name *
                </label>
                <input
                  type="text"
                  value={formData.clientName}
                  onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                  placeholder="Enter client name"
                  className={`w-full px-3 py-2 border rounded-md text-sm ${
                    theme === 'dark'
                      ? 'bg-slate-700 border-slate-600 text-white placeholder:text-slate-500'
                      : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-500'
                  }`}
                />
              </div>

              {/* Weight Lost */}
              <div className="space-y-2">
                <label className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Weight Lost *
                </label>
                <input
                  type="text"
                  value={formData.weightLost}
                  onChange={(e) => setFormData({ ...formData, weightLost: e.target.value })}
                  placeholder="e.g., 8 kgs, 15 lbs"
                  className={`w-full px-3 py-2 border rounded-md text-sm ${
                    theme === 'dark'
                      ? 'bg-slate-700 border-slate-600 text-white placeholder:text-slate-500'
                      : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-500'
                  }`}
                />
              </div>

              {/* Days to Achieve */}
              <div className="space-y-2">
                <label className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Days to Achieve *
                </label>
                <input
                  type="text"
                  value={formData.daysToAchieve}
                  onChange={(e) => setFormData({ ...formData, daysToAchieve: e.target.value })}
                  placeholder="e.g., 30 Days, 90 Days"
                  className={`w-full px-3 py-2 border rounded-md text-sm ${
                    theme === 'dark'
                      ? 'bg-slate-700 border-slate-600 text-white placeholder:text-slate-500'
                      : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-500'
                  }`}
                />
              </div>

              {/* Testimonial */}
              <div className="space-y-2">
                <label className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Testimonial
                </label>
                <textarea
                  value={formData.testimonial}
                  onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
                  placeholder="Share the client's experience (optional)"
                  rows={3}
                  className={`w-full px-3 py-2 border rounded-md text-sm ${
                    theme === 'dark'
                      ? 'bg-slate-700 border-slate-600 text-white placeholder:text-slate-500'
                      : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-500'
                  }`}
                />
              </div>

              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <ImageUpload
                    label="Before Image"
                    folder="transformations"
                    value={formData.beforeImage}
                    onChange={(url) => setFormData({ ...formData, beforeImage: url })}
                  />
                </div>

                <div className="space-y-2">
                  <ImageUpload
                    label="After Image"
                    folder="transformations"
                    value={formData.afterImage}
                    onChange={(url) => setFormData({ ...formData, afterImage: url })}
                  />
                </div>
              </div>

              {/* Featured Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="featured"
                  checked={formData.featured}
                  onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                  className="w-4 h-4 rounded"
                />
                <label htmlFor="featured" className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
                  Mark as Featured
                </label>
              </div>

              {/* Active Checkbox */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="isActive"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="w-4 h-4 rounded"
                />
                <label htmlFor="isActive" className={`text-sm font-medium ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
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
                    <div 
                      className="relative overflow-hidden cursor-pointer group"
                      onClick={() => setLightboxImage(transformation.beforeImage)}
                    >
                      <img
                        src={transformation.beforeImage}
                        alt="Before"
                        className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                      />
                      <div className="absolute top-1 left-1 bg-black/60 px-2 py-1 rounded text-xs text-white font-medium">
                        Before
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                        <span className="text-white text-xs font-medium">Click to View</span>
                      </div>
                    </div>
                  )}
                  {transformation.afterImage && (
                    <div 
                      className="relative overflow-hidden cursor-pointer group"
                      onClick={() => setLightboxImage(transformation.afterImage)}
                    >
                      <img
                        src={transformation.afterImage}
                        alt="After"
                        className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                      />
                      <div className="absolute top-1 right-1 bg-emerald-600/60 px-2 py-1 rounded text-xs text-white font-medium">
                        After
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                        <span className="text-white text-xs font-medium">Click to View</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <CardTitle className={`text-base ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>
                      {transformation.clientName}
                    </CardTitle>
                    <CardDescription className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                      Lost {transformation.weightLost}
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
                    {pageOptions.find(p => p.value === transformation.page)?.label}
                  </Badge>
                  <Badge className={`${
                    theme === 'dark' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' : 'bg-blue-50 text-blue-700 border-blue-200'
                  } border`}>
                    {transformation.daysToAchieve}
                  </Badge>
                  {transformation.featured && (
                    <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 border">
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
                {transformation.testimonial && (
                  <p className={`text-sm line-clamp-3 ${
                    theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    {transformation.testimonial}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightboxImage}
              alt="Full size"
              className="w-full h-full object-contain max-h-[90vh]"
            />
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
