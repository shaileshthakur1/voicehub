'use client'

import { SetStateAction, useState } from 'react'
import { Button } from "../component/ui/button/page";
import { Input } from "../component/ui/input/page";
import { Label } from "../component/ui/label/page";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../component/ui/card/page";

export default function ComplaintTracker() {
  const [complaintId, setComplaintId] = useState('')
  const [status, setStatus] = useState<string | null>(null)

  const handleTrack = async (e: React.FormEvent) => {
    e.preventDefault()
    // Replace this with actual API call to fetch complaint status
    const mockStatuses = ['Received', 'Under Review', 'In Progress', 'Resolved']
    const randomStatus = mockStatuses[Math.floor(Math.random() * mockStatuses.length)]
    setStatus(randomStatus)
  }

  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Track Your Complaint</CardTitle>
        <CardDescription>Enter your complaint ID to check its status</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleTrack} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="complaintId">Complaint ID</Label>
            <Input
                          id="complaintId"
                          value={complaintId}
                          onChange={(e: { target: { value: SetStateAction<string>; }; }) => setComplaintId(e.target.value)}
                          required label={''}            />
          </div>
          <Button type="submit" className="w-full">Track Complaint</Button>
        </form>
        {status && (
          <div className="mt-4 p-4 bg-blue-500 rounded-md">
            <p className="font-semibold">Status: {status}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}