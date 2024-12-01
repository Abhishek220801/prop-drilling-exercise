const Navbar = () => {
  const inventory = [
    {image:`https://images.unsplash.com/photo-1596362601603-b74f6ef166e4?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`, title: 'Grooming', description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, illum.',availability: false},
  {image:'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title:'Acrylics', description:`kahin ab mulaqat hojaye humse Lorem ipsum dolor sit amet consectetur adipisicing elit. `, availability: true},
{image: 'https://images.unsplash.com/photo-1508896694512-1eade558679c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: 'Toy Car', description:'aye aye aye aye aye in ye kusbeem aye aye aye aye sfn Lorem ipsum dolor sit amet  ', availability: false}]
const clickHandler = (()=>{
  alert('hey sunshine')
})
  return (
    <div className="w-full h-screen flex items-center justify-center bg-lime-200 gap-8">
      {inventory.map((elem,ind)=>(
        <div key={ind} className="w-52 bg-zinc-100 rounded-md overflow-hidden">
        <div className="w-full h-32 bg-zinc-300">
          <img className="w-full h-full object-cover" src={elem.image} alt="" />
        </div>
        <div className="w-52 px-3 py-4">
          <h2 className="font-semibold">{elem.title}</h2>
          <p className="text-xs mt-3">{elem.description}
          </p>
          <button onMouseLeave={clickHandler} className={`px-4 py-1 ${elem.availability?'bg-blue-600':'bg-red-600'} text-xs rounded-md text-zinc-100 mt-3`}>{elem.availability?"In stock":"Out of stock"}</button>
        </div>
    </div>
      ))}
    </div>
  ) 
}
export default Navbar 