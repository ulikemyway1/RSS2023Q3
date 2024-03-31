import { AllCardDescr, CarDescr } from "../types/garageTypes";

class GarageDataOwner {
  url: string = "";
  constructor(url: string) {
    this.url = url;
  }

  async getAllCars(): Promise<AllCardDescr> {
    const response = await fetch(this.url);
    const data: AllCardDescr = await response.json();
    return data;
  }

  async deleteCar(id: number): Promise<void> {
    await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: "DELETE",
    });
  }

  public async getCarDescr(id: number) {
    const response = await fetch(`http://127.0.0.1:3000/garage/${id}`, {
      method: "GET",
    });
    const carDescr: CarDescr = await response.json();
    return carDescr;
  }
}

const garageDataOwner = new GarageDataOwner("http://127.0.0.1:3000/garage");
export default garageDataOwner;
