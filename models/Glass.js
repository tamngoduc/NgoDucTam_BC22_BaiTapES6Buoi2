class Glass {
  constructor(id, src, virtualImg, brand, name, color, price, description) {
    this.id = id;
    this.src = src;
    this.virtualImg = virtualImg;
    this.brand = brand;
    this.name = name;
    this.color = color;
    this.price = price;
    this.description = description;
  }

  renderGlass() {
    return `
        <div class="col-4">
            <div class="vglasses__items">
                <img src="${this.src}" class="img-fluid">
            </div>
        </div>
      `;
  }
}

export default Glass;
