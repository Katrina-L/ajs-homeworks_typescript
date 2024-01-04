import Book from "../domain/Books";
import Movie from "../domain/Movies";
import MusicAlbum from "../domain/MusicAlbum";
import Cart from "../service/Cart";

const book = new Book(25, "Garry Potter", "Rowling", 1000, 850);
const movie = new Movie(77, 'Мстители', 200, 2012, 'США', 'Avengers Assemble!', 'фантастика', '137 min / 02:17', 10);
const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);

test("New card should be empty", () => {
    const cart = new Cart();
    expect(cart.items.length).toBe(0);
});

test("Testing addition items into cart & totalAcount & totalAcountWithDiscount", () => {
    const cart = new Cart();
    cart.add(book);
    cart.add(movie);
    cart.add(musicAlbum);
    expect([...cart.items]).toEqual([book, movie, musicAlbum]);
    expect( cart.totalAmount() ).toBe(2100);
    expect( cart.totalAcountWithDiscount() ).toBe(2080);
});

test("Testint removeItem", () => {
    const cart = new Cart();
    cart.add(book);
    cart.add(movie);
    cart.add(musicAlbum);
    cart.removeItem(1008);
    expect(cart.items.length).toBe(2);
})