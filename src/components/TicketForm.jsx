import { Upload, AlertCircle, Github} from 'lucide-react';
import { useState } from 'react';
import SubHeading from './SubHeading';
import TicketCard from './TicketCard';

const TicketForm = () => {
  const [currentView, setCurrentView] = useState('form')
  const [formData, setFormData] = useState({ fullName: '', email: '', githubUsername: '' })
  const [avatar, setAvatar] = useState(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

    const handleFileUpload = (file) => {
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
      if (file.size > 500_000) {
        setErrors((prev) => ({ ...prev, avatar: 'File too large (must be under 500KB).' }))
        return
      }
      const reader = new FileReader()
      reader.onload = (e) => {
        setAvatar(e.target.result)
        setErrors((prev) => ({ ...prev, avatar: '' }))
      }
      reader.readAsDataURL(file)
    } else {
      setErrors((prev) => ({ ...prev, avatar: 'Please upload a valid JPG or PNG file.' }))
    }
  }

  const handleFileSelect = (e) => handleFileUpload(e.target.files[0])
  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragOver(false)
    handleFileUpload(e.dataTransfer.files[0])
  }
  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragOver(true)
  }
  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const removeAvatar = () => {
    setAvatar(null)
    setErrors((prev) => ({ ...prev, avatar: '' }))
  }

  const changeAvatar = () => {
    document.getElementById('avatar-upload').click()
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.'
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.'
    }
    if (!formData.githubUsername.trim()) newErrors.githubUsername = 'GitHub username is required.'
    if (!avatar) newErrors.avatar = 'Please upload your photo.'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      await new Promise((res) => setTimeout(res, 1000)) 
      setCurrentView('success')
    } catch {
      setCurrentView('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (currentView === 'success') {
    return (
      <TicketCard
        fullName={formData.fullName}
        email={formData.email}
        githubUsername={formData.githubUsername}
        avatar={avatar}
      />
    )
  }

  const resetForm = () => {
    setCurrentView('form');
    setFormData({ fullName: '', email: '', githubUsername: '' });
    setAvatar(null);
    setErrors({});
  };


  return (
    
    <div className='max-w-md mx-auto mb-10'>
      <SubHeading/>
        <form action=""  onSubmit={handleSubmit}>
            <div className=''>
              <label className='text-left'>Upload Avatar</label>
                <div className='flex-center border-1 border-dashed border-neutral-400 rounded-lg border-spacing-10 p-8 sm:pd-4 cursor-pointer bg-neutral-700/20 hover:bg-neutral-700'
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onClick={() => document.getElementById('avatar-upload').click()}
                >
                    <input
                    className='hidden'
                    type="file"
                    id="avatar-upload"
                    accept="image/jpeg,image/png"
                    onChange={handleFileSelect}
                    />
                    {avatar ? (
                            <div className="flex flex-col items-center space-y-1">
                              <img src={avatar} alt="Preview" className="w-15 h-15 rounded-md object-cover" />
                              <div className="flex space-x-3">
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    removeAvatar();
                                  }}
                                  className="p-1 bg-neutral-700 hover:bg-orange-500 text-white text-xs rounded-sm transition-colors underline"
                                >
                                  <span>Remove image</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    changeAvatar();
                                  }}
                                  className="p-1 bg-neutral-700 hover:bg-blue-900 text-white text-xs rounded-sm transition-colors"
                                >
                                  <span>Change image</span>
                                </button>
                              </div>
                            </div>
                        ) : (
                          <>
                        <img
                        className='mb-3 w-10 h-10 rounded-lg border-1 border-neutral-600 bg-neutral-800 p-1.5'
                        src="./images/icon-upload.svg" alt="" />
                        <p className="text-neutral-300">Drag and drop or click to upload</p>
                        </>
                )}
                </div>
                {errors.avatar ? (
                  <div className="flex items-center gap-2 mt-3 text-xs text-red-400">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.avatar}</span>
                  </div>
                ) : (
                  <div className='flex mt-3 gap-3'>
                    <img src="./images/icon-info.svg" alt="" />
                    <p className="text-neutral-300 text-xs">Upload your photo (JPG or PNG, max size: 5MB).</p>
                  </div>
                )}

            </div>
            <div>
              <label>Full Name</label>
              <input type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className={`${errors.fullName ? 'border-red-400' : ''} `}
              />
              {errors.fullName && (
                <div className="flex items-center gap-2 mt-3 text-xs text-red-400">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.fullName}</span>
                </div>
              )}
            </div>

            <div>
              <label>Email Address</label>
              <input type="email"
              name="email"
              placeholder='example@email.com'
              value={formData.email}
              onChange={handleInputChange}
              className={`${errors.email ? 'border-red-400' : ''}`}
              />
              {errors.email && (
                <div className="flex items-center gap-2 mt-3 text-xs text-red-400">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.email}</span>
                </div>
              )}
            </div>
            <div>
              <label>Github Username</label>
              <input type="text"
              placeholder='@yourusername'
              name="githubUsername"
              value={formData.githubUsername}
              onChange={handleInputChange}
              className={`${errors.githubUsername ? 'border-red-400' : ''}`}
              />
               {errors.githubUsername && (
                <div className="flex items-center gap-2 mt-3 text-xs text-red-400">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.githubUsername}</span>
                </div>
              )}
            </div>
             <button 
             type="submit" 
             disabled={isSubmitting}>{isSubmitting ? 'Submitting…' : 'Generate My Ticket'}</button>

        </form>
    </div>
  )
}

export default TicketForm