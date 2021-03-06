import * as PIXI from 'pixi.js'
import tileView from "./tileView";

class SpecialTileView extends tileView{
    constructor(titleText, image, tileId) {
        super(tileId);
        this.titleText = titleText;
        this.title = new PIXI.Container();
        this.title.name = "title";
        this.tile.addChild(this.title);
        this.image = new PIXI.Sprite(image);
        this.tile.addChild(this.image);
        this.initializeDrawings()
    }
    initializeDrawings() {
        super.initializeDrawings();
        this.image.width = 50;
        this.image.height = 50;
        this.image.x = this.x + this.size / 2 - 25;
        this.image.y = this.y + this.size / 4;
        const style = new PIXI.TextStyle({
            fontFamily: "\"Times New Roman\", Times, serif",
        });
        let formattedTitle = this.titleText;
        formattedTitle = formattedTitle.split(" ").join("\n");
        let titleText =new PIXI.Text(formattedTitle, {...style, align: "center", fontSize: 9});
        titleText.name = "titleText";
        titleText.anchor.x =0.5;
        titleText.anchor.y =0.5;
        titleText.x = this.x + this.size / 2;
        titleText.y = this.y + 10;
        this.title.addChild(titleText);
    }
}
export default SpecialTileView;
