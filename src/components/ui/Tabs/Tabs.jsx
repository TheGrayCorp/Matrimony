const Tabs = ({ tabs, activeTab, onTabClick }) => {
  return (
    <div className="inline-flex bg-gray-200 rounded-lg">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabClick(tab.id)}
          className={`px-12 py-3 rounded-md text-sm font-semibold transition-colors duration-300
            ${
              activeTab === tab.id
                ? "bg-purple text-white shadow"
                : "text-gray-600 hover:bg-gray-200"
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
