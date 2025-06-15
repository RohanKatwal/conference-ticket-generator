import { Upload, AlertCircle, Github } from 'lucide-react';
const TicketForm = () => {
  return (
    <div className='max-w-md mx-auto'>
        <form action="">
            <div className=''>
                <label className='text-left'>Upload Avatar</label>
                <div className='border-1 border-dashed border-neutral-400 rounded-lg border-spacing-10 p-8 cursor-pointer'>
                    <input
                    type="file"
                    id="avatar-upload"
                    accept="image/jpeg,image/png"
                    />
                </div>
            </div>

        </form>
    </div>
  )
}

export default TicketForm