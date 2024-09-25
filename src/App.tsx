import Background from './assets/windows.jpg'

const App = () => {
  return (
    <div className='relative min-w-screen w-full max-h-screen h-screen'>
      <img src={Background} className='w-full h-screen object-cover' />
      <div className='absolute top-0 left-0 min-w-screen w-full max-h-screen h-screen px-32 py-16 flex flex-col gap-16'>
        <h1 className='text-5xl text-white'>Start</h1>
        <div className='w-full h-full grid grid-cols-8 grid-rows-4 grid-flow-col gap-2'>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => {
            const randomWidth = Math.ceil(Math.random() * 2)
            const randomHeight = Math.ceil(Math.random() * 2)
            return (randomWidth && randomHeight) && <WCard key={i} width={randomWidth} height={randomHeight} />
          })}
        </div>
      </div>
    </div>
  )
}

const WCard = (props: { width: number, height: number }) => {
  const { width, height } = props
  return (
    <div className={`col-span-${width} row-span-${height} bg-green-600`}>
    </div>
  )
}

export default App
