import WrapperContainer from '@/Layout/WrapperContainer';
import Heading from '@/Layout/Heading';

const services = [
  "Furniture Assembly", "Home Repairs", "Help Moving", "Heavy Lifting", "Home Cleaning", "Spring Cleaning",
  "Personal Assistant", "Hang Art, Mirror & Decor", "Yard Work Services", "Wait in Line", "Closet Organization Service", "Handyman",
  "Door, Cabinet, & Furniture Repair", "Appliance Installation & Repairs", "TV Mounting", "Drywall Repair Service", "Flooring & Tiling Help",
  "Electrical Help", "Sealing & Caulking", "Plumbing", "Window & Blinds Repair", "Ceiling Fan Installation", "Smart Home Installation",
  "Install Air Conditioner", "Painting", "Install Shelves, Rods & Hooks", "Home Maintenance", "Install Blinds & Window Treatments",
  "Baby Proofing", "Light Installation", "Carpentry Services", "General Mounting", "Cabinet Installation", "Wallpapering Service",
  "Fence Installation & Repair Services", "Deck Restoration Services", "Doorbell Installation", "Home Theater Installing",
  "Truck Assisted Help Moving", "Packing Services & Help", "Unpacking Services", "Local Movers", "Junk Pickup", "Furniture Movers",
  "One Item Movers", "Storage Unit Moving", "Couch Removal", "Mattress Pick-Up & Removal", "Furniture Removal", "Pool Table Movers",
  "Appliance Removal", "Heavy Furniture Moving", "Rearrange Furniture", "Full Service Help Moving", "In-Home Furniture Movers",
  "Patio Furniture Assembly", "Desk Assembly", "Dresser Assembly", "Bed Assembly", "Bookshelf Assembly", "Couch Assembly",
  "Chair Assembly", "Wardrobe Assembly", "Table Assembly", "Disassemble furniture", "Wall Mounting", "Hang Christmas Lights",
  "House Cleaning Services", "Deep Cleaning", "Disinfecting Services", "Move In Cleaning", "Move Out Cleaning", "Vacation Rental Cleaning",
  "Carpet Cleaning Service", "Garage Cleaning", "One Time Cleaning Services", "Car Washing", "Laundry Help", "Pressure Washing",
  "Delivery Service", "Grocery Shopping & Delivery", "Running Your Errands", "Christmas Tree Delivery", "Deliver Big Piece of Furniture",
  "Drop Off Donations", "Contactless Delivery", "Pet Food Delivery", "Baby Food Delivery", "Return Items", "Wait for Delivery",
  "Shipping", "Breakfast Delivery", "Coffee Delivery", "Light Installation", "Organization", "Gardening Services", "Weed Removal",
  "Lawn Care Services", "Lawn Mowing Services", "Landscaping Services", "Gutter Cleaning", "Tree Trimming Service",
  "Vacation Plant Watering", "Patio Cleaning", "Hot Tub Cleaning", "Fence Staining", "Mulching Services", "Lawn Fertilizer Service",
  "Hedge Trimming Service", "Outdoor Party Setup", "Urban Gardening Service", "Leaf Raking & Removal", "Produce Gardening",
  "Hose Installation", "Shed Maintenance", "Holiday Help", "Gift Wrapping Services", "Holiday Decorating", "Party Cleaning",
  "Toy Assembly Service", "Christmas Tree Removal", "Snow Removal", "Sidewalk Salting", "Window Winterization",
  "Residential Snow Removal", "AC Winterization", "Winter Yardwork", "Pipe Insulation", "Storm Door Installation",
  "Winter Deck Maintenance", "Water Heater Maintenance", "Organize Home", "Interior Design Service", "Virtual Assistant",
  "Dog Walking", "Baby Prep", "Organize a Room", "General Cleaning", "Data Entry", "Computer Help", "Office Cleaning",
  "Office Tech Setup", "Office Movers", "Office Supply & Snack Delivery", "Office Furniture Assembly", "Office Setup & Organization",
  "Office Administration", "Office Interior Design", "Moving Office Furniture", "Office Mounting Service",
  "Contactless Prescription Pick-up & Delivery"
];

const ServicesPage = () => {
  return (
    <WrapperContainer>
      <div className="justify-center text-center">
        <Heading className="text-2xl font-bold mb-4">Featured Tasks</Heading>
        <p className="mb-6">Let Taskers help tackle your to-do list.</p>
      </div>

      <div className="overflow-y-scroll bg-gray-50">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 h-[600px] overflow-y-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-3 rounded-lg shadow hover:shadow-lg transition-all text-sm text-center border border-gray-200 w-full h-20 hover:bg-gradient-to-r hover:from-green-100 hover:to-green-300"
            >
              {service}
            </div>
          ))}
        </div>
      </div>
    </WrapperContainer>
  );
};

export default ServicesPage;
