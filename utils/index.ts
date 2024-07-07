export async function fetchCars(model = '') {
    const headers = {
        'x-rapidapi-key': '758a859d04msh8e96678da714ddap12057fjsnb01e7c133d22',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    };

    let url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
    
    // Append model query parameter if provided
    if (model) {
        url += `?model=${encodeURIComponent(model)}`;
    }

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result); // Debugging line to check API response
        return result;
    } catch (error) {
        console.error('Error fetching cars:', error);
        return { message: 'Error fetching data' }; // Return a meaningful message in case of error
    }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };