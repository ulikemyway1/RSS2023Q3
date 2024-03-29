import { AllCardDescr } from "../types/garageTypes";

class GarageDataOwner {
  url: string = "";
  constructor(url: string) {
    this.url = url;
  }

  async getAllCars() {
    const response = await fetch(this.url);
    const data: AllCardDescr = await response.json();
    return data;
  }

  async deleteCar(id: number) {
    await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: "DELETE",
    });
  }
}

const garageDataOwner = new GarageDataOwner("http://127.0.0.1:3000/garage");
export default garageDataOwner;
