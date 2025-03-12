
import CompanyGrid from '../components/CompanyGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Featured Companies</h1>
          <p className="text-gray-600">Hover or click on a tile to learn more</p>
        </div>
        <CompanyGrid />
      </div>
    </div>
  );
};

export default Index;
