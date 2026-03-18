import AppClient from "@/components/AppClient";

const ALL_MENU_ITEMS = [
  { id: "1", name: "Ceremonial Buna", category: "Buna", description: "Slow-roasted coffee ceremony.", price: 50, image: "/jebena.png", tag: "Today's Best" },
  { id: "2", name: "Deluxe Beyaynetu", category: "Beyaynetu", description: "Traditional vegan platter.", price: 200, image: "/beyaynetu.png", tag: "Customer Fav" },
  { id: "3", name: "Gourmet Tibs", category: "Tibs", description: "Sautéed marinated beef.", price: 250, image: "/tibs.png", tag: "New Item" },
  { id: "4", name: "Heritage Kitfo", category: "Tibs", description: "Seasoned minced beef delicacy.", price: 280, image: "/kitfo.png", tag: "Elite Selection" },
  { id: "5", name: "Traditional Firfir", category: "Bread", description: "Spiced injera Breakfast.", price: 180, image: "/beyaynetu.png", tag: "Morning Special" },
  { id: "6", name: "Injera Roll", category: "Bread", description: "Savory veggie rolls.", price: 150, image: "/beyaynetu.png", tag: "Snack" },
];

export default function Home() {
  return (
    <AppClient items={ALL_MENU_ITEMS} />
  );
}
