const Divider = ({ content }) => {
  return (
    <div className='relative lg:hidden mt-8 w-8/12 self-center'>
      <div className='absolute inset-0 flex items-center' aria-hidden='true'>
        <div className='w-full border-t border-gray-400' />
      </div>
      <div className='relative flex justify-center'>
        <span className='bg-white px-2 text-sm text-gray-500'>{content}</span>
      </div>
    </div>
  )
}

export default Divider
