const Card = ({data})=>{
console.log(data)
return(
	<>
	{data.map((item)=><div><a href={item.slug}>Go to page about {item.name}</a></div>)}
	</>
)
}

export default Card