const Divider = ({ content }) => {
  return (
    <div className='relative mt-8 w-full self-center'>
      <div
        className='absolute inset-0 flex items-center justify-center'
        aria-hidden='true'
      >
        <div className='w-9/12	 border-t border-gray-200' />
      </div>
      <div className='relative flex justify-center'>
        <span className='bg-white px-2 text-sm text-gray-500'>{content}</span>
      </div>
    </div>
  )
}

export default Divider
