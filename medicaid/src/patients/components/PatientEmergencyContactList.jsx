import EmergencyContactCard from './EmergencyContactCard';

const contacts = [
  {
    name: "Jane Doe",
    relation: "Spouse",
    phone: "+1 (555) 123-4567",
    address: "123 Main St City, State 12345",
  },
  {
    name: "John Doe",
    relation: "Son",
    phone: "+1 (555) 234-5678",
    address: "456 Oak Ave City, State 12345",
  },
  {
    name: "Alice Smith",
    relation: "Sister",
    phone: "+1 (555) 345-6789",
    address: "789 Pine Rd City, State 12345",
  },
];

const EmergencyContactsList = () => {
  return (
    <div className="space-y-6">
      <EmergencyContactCard contact={contacts[0]} isPrimary={true} />
      <EmergencyContactCard contact={contacts[1]} isPrimary={false} />
      <EmergencyContactCard contact={contacts[2]} isPrimary={false} />
    </div>
  );
};

export default EmergencyContactsList;