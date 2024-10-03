// Updated ComplaintForm.tsx
'use client'

import { SetStateAction, useState } from 'react';
import { Button } from "../component/ui/button/page";
import { Input } from "../component/ui/input/page";
import { Textarea } from "../component/ui/textarea/page";
import { Label } from "../component/ui/label/page";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../component/ui/card/page";

export default function ComplaintForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [complaint, setComplaint] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('complaint', complaint);
    if (file) {
      formData.append('file', file);
    }

    try {
      const response = await fetch('/api/submit-complaint', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setName('');
        setEmail('');
        setComplaint('');
        setFile(null);
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-purple-400 text-2xl">Submit a Complaint</CardTitle>
        <CardDescription className="text-gray-400 text-lg mb-6">
          Please fill out the form below to submit your complaint. You can optionally attach an image or video file.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-gray-200">Name</Label>
            <Input
                          id="name"
                          value={name}
                          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setName(e.target.value)}
                          required
                          className="bg-gray-700 border-gray-600 text-gray-200 w-full rounded-md h-8" label={''}            />
          </div>
          {/* Email Field */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-200">Email</Label>
            <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setEmail(e.target.value)}
                          required
                          className="bg-gray-700 border-gray-600 text-gray-200 w-full rounded-md h-8" label={''}            />
          </div>
          {/* Complaint Field */}
          <div className="space-y-2">
            <Label htmlFor="complaint" className="text-gray-200">Complaint</Label>
            <Textarea
                          id="complaint"
                          value={complaint}
                          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setComplaint(e.target.value)}
                          required
                          className="bg-gray-700 border-gray-600 text-gray-200 w-full rounded-md h-20" // Set fixed height
                          label={''}            />
          </div>
          {/* File Attachment Field */}
          <div className="space-y-2">
            <Label htmlFor="file" className="text-gray-200">Attach File (optional)</Label>
            <Input
                          id="file"
                          type="file"
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFile(e.target.files?.[0] || null)}
                          accept="image/*,video/*"
                          className="bg-gray-700 border-gray-600 text-gray-200 w-full rounded-md h-8" label={''}            />
          </div>
          <Button type="submit" disabled={isSubmitting} className="bg-purple-600 hover:bg-purple-700 text-white">
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
          {submitStatus === 'success' && <p className="text-green-500">Complaint submitted successfully!</p>}
          {submitStatus === 'error' && <p className="text-red-500">There was an error submitting your complaint. Please try again.</p>}
        </form>
      </CardContent>
    </Card>
  );
}
