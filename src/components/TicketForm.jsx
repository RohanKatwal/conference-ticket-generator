import { Upload, AlertCircle, Github } from 'lucide-react';
const TicketForm = () => {
  return (
    <div className='max-w-md mx-auto'>
        <form action="">
            <div className=''>
                <label className='text-left'>Upload Avatar</label>
                <div className='flex-center border-1 border-dashed border-neutral-400 rounded-lg border-spacing-10 p-8 cursor-pointer bg-neutral-700/20'>
                    <input
                    className='hidden'
                    type="file"
                    id="avatar-upload"
                    accept="image/jpeg,image/png"
                    />
                    <img
                    className='mb-3 w-10 h-10 rounded-lg border-1 border-neutral-600 bg-neutral-800 p-1.5'
                    src="/images/icon-upload.svg" alt="" />
                     <p className="text-neutral-300">Drag and drop or click to upload</p>
                </div>
                <div className='flex mt-3 gap-3'>
                  <img src="/images/icon-info.svg" alt="" />
                  <p className="text-neutral-300 text-xs">Drag and drop or click to upload</p>
                </div>
            </div>

        </form>
    </div>
  )
}

export default TicketForm