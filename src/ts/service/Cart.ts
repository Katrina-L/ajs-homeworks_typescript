import Buyable from "../domain/Buyable";

export default class Cart {
    _items: Buyable[] = [];

    add (item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items];
    }

    totalAmount(): number {
        return this.items.reduce( (sum, item) => sum + item.price, 0);
    }

    totalAcountWithDiscount(discount: number = 0): number {
        return this.items.reduce( (sum, item) => item.discount ? sum + item.price * (1 - item.discount / 100) : sum + item.price, 0);
    }

    removeItem(id: number): Buyable[] {
        let index = this.items.findIndex( item => item.id === id );
        return this._items.splice(index, 1);
    }
}