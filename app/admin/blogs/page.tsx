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
import { Plus, Edit, Trash2, Newspaper, AlertCircle, CheckCircle, Eye } from 'lucide-react';
import { useTheme } from '@/app/providers/ThemeProvider';
import ImageUpload from '@/components/admin/ImageUpload';

interface Blog {
  _id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  author: string;
  category: string;
  tags: string[];
  views: number;
  isPublished: boolean;
  isActive: boolean;
  createdAt: string;
}

const initialFormState: Omit<Blog, '_id' | 'createdAt'> = {
  title: 'Image',
  description: 'Image description',
  content: 'Image content',
  image: '',
  author: 'DTPS Admin',
  category: 'wellness',
  tags: [],
  views: 0,
  isPublished: false,
  isActive: true,
};

export default function BlogsPage() {
  const { theme } = useTheme();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState(initialFormState);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('/api/blogs');
      const data = await res.json();
      setBlogs(data.blogs || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setMessage({ type: 'error', text: 'Failed to load blogs' });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const url = '/api/blogs';
      const method = editingId ? 'PUT' : 'POST';
      const body = editingId ? { id: editingId, ...formData } : formData;

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        await fetchBlogs();
        closeModal();
        setMessage({
          type: 'success',
          text: editingId ? 'Blog updated successfully!' : 'Blog created successfully!',
        });
        setTimeout(() => setMessage(null), 3000);
      } else {
        const error = await res.json();
        setMessage({ type: 'error', text: error.error || 'Failed to save blog' });
      }
    } catch (error) {
      console.error('Error saving blog:', error);
      setMessage({ type: 'error', text: 'Failed to save blog' });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    try {
      const res = await fetch(`/api/blogs?id=${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        await fetchBlogs();
        setMessage({ type: 'success', text: 'Blog deleted successfully!' });
        setTimeout(() => setMessage(null), 3000);
      } else {
        setMessage({ type: 'error', text: 'Failed to delete blog' });
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
      setMessage({ type: 'error', text: 'Failed to delete blog' });
    }
  };

  const openEditModal = (blog: Blog) => {
    setEditingId(blog._id);
    setFormData({
      title: blog.title,
      description: blog.description,
      content: blog.content,
      image: blog.image,
      author: blog.author,
      category: blog.category,
      tags: blog.tags,
      views: blog.views,
      isPublished: blog.isPublished,
      isActive: blog.isActive,
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
          <p className={theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}>Loading blogs...</p>
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
            <Newspaper className="w-8 h-8 text-emerald-500" />
            Blog Posts
          </h1>
          <p className={`${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} mt-1`}>
            Manage your blog articles and content
          </p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white gap-2">
              <Plus className="w-4 h-4" />
              Write Blog
            </Button>
          </DialogTrigger>

          <DialogContent className={`${
            theme === 'dark'
              ? 'bg-slate-800 border-slate-700'
              : 'bg-white border-slate-200'
          } max-w-3xl max-h-[90vh] overflow-y-auto`}>
            <DialogHeader>
              <DialogTitle className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>
                {editingId ? 'Edit Blog Post' : 'Create New Blog Post'}
              </DialogTitle>
              <DialogDescription className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
                {editingId ? 'Update the blog details below' : 'Fill in the blog details below'}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <ImageUpload
                  label="Featured Image"
                  folder="blogs"
                  value={formData.image}
                  onChange={(url) => setFormData({ ...formData, image: url })}
                />
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

      {/* Blogs List */}
      {blogs.length === 0 ? (
        <Card className={theme === 'dark' ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-slate-200'}>
          <CardContent className="pt-12 pb-12 text-center">
            <Newspaper className={`w-12 h-12 mx-auto mb-4 ${
              theme === 'dark' ? 'text-slate-600' : 'text-slate-400'
            }`} />
            <p className={theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}>
              No blogs found. Start writing your first blog post!
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {blogs.map((blog) => (
            <Card key={blog._id} className={`${
              theme === 'dark'
                ? 'bg-slate-800/50 border-slate-700 hover:border-emerald-500/50'
                : 'bg-white border-slate-200 hover:border-emerald-500'
            } transition-colors`}>
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  {blog.image && (
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                    />
                  )}

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className={`font-semibold text-lg ${
                          theme === 'dark' ? 'text-white' : 'text-slate-900'
                        }`}>
                          {blog.title}
                        </h3>
                        <p className={`text-sm ${
                          theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                        }`}>
                          By {blog.author || 'Unknown'}
                        </p>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          size="md"
                          variant="outline"
                          onClick={() => openEditModal(blog)}
                          className={theme === 'dark' ? 'border-slate-600 text-slate-400 hover:text-slate-300' : ''}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="md"
                          variant="outline"
                          onClick={() => handleDelete(blog._id)}
                          className={theme === 'dark' ? 'border-red-600 text-red-400 hover:text-red-300' : 'border-red-300 text-red-600 hover:text-red-700'}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <p className={`text-sm mb-3 line-clamp-2 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {blog.description}
                    </p>

                    <div className="flex items-center justify-between pt-3 border-t border-slate-700">
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="outline" className={theme === 'dark' ? 'border-slate-600 text-slate-400' : ''}>
                          {blog.category}
                        </Badge>
                        {blog.isPublished && (
                          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/10">
                            Published
                          </Badge>
                        )}
                        {!blog.isActive && (
                          <Badge variant="destructive" className="bg-red-500/10 text-red-400 border-red-500/30">
                            Inactive
                          </Badge>
                        )}
                      </div>

                      <div className={`flex items-center gap-1 text-sm ${
                        theme === 'dark' ? 'text-slate-400' : 'text-slate-600'
                      }`}>
                        <Eye className="w-4 h-4" />
                        {blog.views} views
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
