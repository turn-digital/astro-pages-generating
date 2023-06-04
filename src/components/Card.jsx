const spreadsheetId = '1nohsvC1XmDUOb_0x2V-OVuyILQdMLGJOZ1R7SBtTBHM';
const sheetName = 'test';
const apiKey = 'AIzaSyBicSR944LWHYRKbydf2xgkq1AlYYnZ4K0';

const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}!A1:Z100?key=${apiKey}`;

const response = await fetch(url);
const apiData = await response.json();

const data = apiData.values; // Assuming the actual data is contained in apiData.values

// Transform the data array into an array of objects
const formattedData = data.slice(1).map(([slug, name, age, sex]) => ({
	slug,
	name,
	age,
	sex
  }));

const Card = ()=>{
return(
	<>
	{formattedData.map((item)=><div><a href={item.slug}>Go to page about {item.name}</a></div>)}
	</>
)
}

export default Card