export const fetchDojos = async () => {
    const response = await fetch('https://api.foursquare.com/v3/places/search?query=meditation&near=chicago',
  {
    "headers": {
      'Authorization': process.env.NEXT_PUBLIC_FOURSQUARE_API_KEY
    }
  })

  const data = await response.json();

  const transformedData = data?.results?.map((venue) => {
      return {
          id: venue.fsq_id,
          ...venue
      }
  }) || [];
return transformedData;
console.log(transformedData)
}



