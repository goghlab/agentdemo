import { useState } from "react";
import Icon from "@leafygreen-ui/icon";

interface ContactInfoProps {
  onSubmit: (form: any) => void;
}

export default function ContactInfo({ onSubmit }: ContactInfoProps) {
  // Add state for form fields
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    funFact: ''
  });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [field]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col gap-2 border-emerald-500 shadow-lg">
        <input type="text" className="border p-2" placeholder="First Name" value={formData.firstName} onChange={handleChange('firstName')} />
        <input type="text" className="border p-2" placeholder="Last Name" value={formData.lastName} onChange={handleChange('lastName')} />
        <input type="email" className="border p-2" placeholder="john.doe@example.com" value={formData.email} onChange={handleChange('email')} />
        <input type="text" className="border p-2" placeholder="(123) 456-7890" value={formData.phone} onChange={handleChange('phone')} />
        <textarea className="border p-2" placeholder="I love to code!" value={formData.funFact} onChange={handleChange('funFact')} />
        <button type="submit" className="mt-4 flex items-center gap-2 cursor-pointer select-none bg-emerald-500 text-white px-4 py-2 rounded">
          <Icon glyph="Checkmark" />
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}
