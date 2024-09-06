const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

//Fetch all property
async function fetchProperties() {
    try {
        //Handle the case where domain is not available yet
        if(!apiDomain){
            return [];
        }
        //endpoint || route
      const res = await fetch(
        `${apiDomain}/properties`,
        { cache: 'no-store' }
      );
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      return res.json();
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  //Fetch single property
  async function fetchProperty(id) {
    try {
        //Handle the case where domain is not available yet
        if(!apiDomain){
            return null;
        }

        // endpoint || route
      const res = await fetch(
        `${apiDomain}/properties/${id}`,
        { cache: 'no-store' }
      );
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      return res.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  }


  export {fetchProperties, fetchProperty}