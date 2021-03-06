const PropertyModel = require("./propertyModel");

class CityModel extends PropertyModel {

    /**
     * Creates a city data model
     * @param id
     * @param name
     * @param rentPrice
     * @param mortgagePrice
     * @param price
     * @param tile
     * @param card
     * @param houseCost
     * @param hotelCost
     * @param buildings
     * @param cityGroup
     */
    constructor(id, name, rentPrice, mortgagePrice, price, tile, houseCost, hotelCost, buildings, color) {
        super(id, name, rentPrice, mortgagePrice, price, tile);
        this.houseCost = houseCost;
        this.hotelCost = hotelCost;
        this.buildings = buildings;
        this.color = color;
        this.houseCount = 0;
        this.hotelCount = 0;
        this.type = "CityModel";
    }

    getID(){
        return super.getID();
    }

    /**
     *  //below shows the rents of city for different combinations:
        //0 house -> rentPrice[0]
        //1 house -> rentPrice[1]
        //2 houses -> rentPrice[2]
        //3 houses -> rentPrice[3]
        //4 houses -> rentPrice[4]
        //1 hotel -> rentPrice[5]
     * @returns {number|*}
     */
    getRentPrice() {

        //if all cities in the same color group are owned, rent is doubled
        //let double = this.cityGroup.isAllOwnedBy(this.ownerId);
        // if (this.ownerId != null) {
        //     for (let j = 0;  j < this.cityGroup.getCityCount(); j++) {
        //         if (this.cityGroup[j].ownerId != this.ownerId) {
        //             double = false;
        //         }
        //     }
        // }


        //index 5 means that, the property has 4 houses and 1 hotels.
        //max number of houses is 4.
        let index = this.houseCount + this.hotelCount * 5;
        //double the rent price
        if(index !==0){
            return this.rentPrice[index];
        }else{
            return super.getRentPrice();
        }
    }

    //mortgages the city and returns the amount needs to be added to player's balance
    mortgage() {
        let addedMoney = super.mortgage();
        //money that goes to the player.
        addedMoney += (this.houseCount * this.houseCost) / 2 + (this.hotelCount * this.hotelCost) / 2;
        this.hotelCount = 0;
        this.houseCount = 0;
        this.buildings = null;
        return addedMoney;
    }
}
module.exports = CityModel;