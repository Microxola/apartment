import { useState, useEffect } from 'react';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main-page-wrapper">
      {/* Loading Transition */}
      {isLoading && (
        <div id="preloader" className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="ctn-preloader">
            <div className="icon">
              <img 
                src="../images/loader.gif" 
                alt="Loading..." 
                className="mx-auto block w-16 h-16" 
                width="64" 
                height="64"
              />
            </div>
          </div>
        </div>
      )}

      {/* Dashboard Aside Menu */}
      <aside className="dash-aside-navbar fixed left-0 top-0 h-full w-80 bg-white shadow-lg z-40">
        <div className="relative h-full flex flex-col">
          <div className="logo flex items-center justify-between px-6 py-6 border-b">
            <a href="dashboard-index.html">
              <img src="../images/logo/logo_01.svg" alt="Logo" />
            </a>
            <button className="close-btn block md:hidden">
              <i className="fa-light fa-circle-xmark"></i>
            </button>
          </div>
          
          <nav className="dasboard-main-nav py-6 border-b flex-1">
            <ul className="space-y-2">
              <li className="px-6">
                <a href="#" className="flex w-full items-center text-[#ff6725]">
                  <img src="images/icon/icon_1_active.svg" alt="" className="w-6 h-6 mr-3" />
                  <span>Dashboard</span>
                </a>
              </li>
              <li className="px-6">
                <a href="message.html" className="flex w-full items-center text-gray-600 hover:text-[#ff6725]">
                  <img src="images/icon/icon_2.svg" alt="" className="w-6 h-6 mr-3" />
                  <span>Message</span>
                </a>
              </li>
              
              <li className="border-b py-6 mb-8"></li>
              
              <li className="px-6">
                <div className="nav-title text-gray-400 text-sm uppercase font-medium mb-2">Profile</div>
              </li>
              
              <li className="px-6">
                <a href="profile.html" className="flex w-full items-center text-gray-600 hover:text-[#ff6725]">
                  <img src="images/icon/icon_3.svg" alt="" className="w-6 h-6 mr-3" />
                  <span>Profile</span>
                </a>
              </li>
              
              <li className="px-6">
                <a href="account-settings.html" className="flex w-full items-center text-gray-600 hover:text-[#ff6725]">
                  <img src="images/icon/icon_4.svg" alt="" className="w-6 h-6 mr-3" />
                  <span>Account Settings</span>
                </a>
              </li>
              
              <li className="px-6">
                <a href="membership.html" className="flex w-full items-center text-gray-600 hover:text-[#ff6725]">
                  <img src="images/icon/icon_5.svg" alt="" className="w-6 h-6 mr-3" />
                  <span>Membership</span>
                </a>
              </li>
              
              <li className="border-b py-6 mb-8"></li>
              
              <li className="px-6">
                <div className="nav-title text-gray-400 text-sm uppercase font-medium mb-2">Listing</div>
              </li>
              
              <li className="px-6">
                <a href="properties-list.html" className="flex w-full items-center text-gray-600 hover:text-[#ff6725]">
                  <img src="images/icon/icon_6.svg" alt="" className="w-6 h-6 mr-3" />
                  <span>My Properties</span>
                </a>
              </li>
              
              <li className="px-6">
                <a href="add-property.html" className="flex w-full items-center text-gray-600 hover:text-[#ff6725]">
                  <img src="images/icon/icon_7.svg" alt="" className="w-6 h-6 mr-3" />
                  <span>Add New Property</span>
                </a>
              </li>
              
              <li className="px-6">
                <a href="favourites.html" className="flex w-full items-center text-gray-600 hover:text-[#ff6725]">
                  <img src="images/icon/icon_8.svg" alt="" className="w-6 h-6 mr-3" />
                  <span>Favourites</span>
                </a>
              </li>
              
              <li className="px-6">
                <a href="saved-search.html" className="flex w-full items-center text-gray-600 hover:text-[#ff6725]">
                  <img src="images/icon/icon_9.svg" alt="" className="w-6 h-6 mr-3" />
                  <span>Saved Search</span>
                </a>
              </li>
              
              <li className="px-6">
                <a href="review.html" className="flex w-full items-center text-gray-600 hover:text-[#ff6725]">
                  <img src="images/icon/icon_10.svg" alt="" className="w-6 h-6 mr-3" />
                  <span>Reviews</span>
                </a>
              </li>
            </ul>
          </nav>

          <div className="profile-complete-status border-b py-6 px-6">
            <div className="progress-value font-medium">82%</div>
            <div className="progress-line relative w-full h-2 bg-gray-200 rounded-full mt-2">
              <div className="inner-line absolute left-0 top-0 h-full bg-blue-600 rounded-full" style={{width: '82%'}}></div>
            </div>
            <p className="text-gray-600 text-sm mt-2">Profile Complete</p>
          </div>

          <div className="px-6 py-6">
            <a href="#" className="flex w-full items-center text-gray-600 hover:text-[#ff6725]">
              <div className="icon transition-all duration-300 flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 mr-3">
                <img src="images/icon/icon_41.svg" alt="" className="w-5 h-5" />
              </div>
              <span>Logout</span>
            </a>
          </div>
        </div>
      </aside>

      {/* Dashboard Body */}
      <div className="dashboard-body ml-80 min-h-screen bg-gray-50">
        <div className="relative">
          {/* Header */}
          <header className="dashboard-header bg-white shadow-sm px-6 py-4">
            <div className="flex items-center justify-end">
              <h4 className="m-0 hidden lg:block">Dashboard</h4>
              
              <button className="dash-mobile-nav-toggler block md:hidden mr-auto">
                <span></span>
              </button>
              
              <form className="search-form ms-auto flex items-center">
                <input 
                  type="text" 
                  placeholder="Search here.." 
                  className="border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">
                  <img src="../images/lazy.svg" data-src="images/icon/icon_43.svg" alt="" className="mx-auto w-5 h-5" />
                </button>
              </form>
              
              <div className="profile-notification relative ms-3 ms-md-5 mr-4">
                <button className="noti-btn relative p-2">
                  <img src="../images/lazy.svg" data-src="images/icon/icon_11.svg" alt="" className="w-6 h-6" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full"></div>
                </button>
              </div>
              
              <div className="hidden md:block mr-3">
                <a href="add-property.html" className="btn-two bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                  <span>Add Listing</span>
                  <i className="fa-thin fa-arrow-up-right ml-2"></i>
                </a>
              </div>
              
              <div className="user-data relative">
                <button className="user-avatar online relative rounded-full w-10 h-10 overflow-hidden">
                  <img src="../images/lazy.svg" data-src="images/avatar_01.jpg" alt="" className="w-full h-full object-cover" />
                </button>
              </div>
            </div>
          </header>

          <h2 className="main-title block lg:hidden text-2xl font-bold px-6 py-4">Dashboard</h2>
          
          <div className="bg-white rounded-2xl p-6 mx-6 mt-6">
            <div className="row grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="col">
                <div className="dash-card-one bg-white rounded-3xl relative mb-4 p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="icon rounded-full w-12 h-12 flex items-center justify-center bg-blue-100 mb-3 sm:mb-0 sm:order-1">
                      <img src="../images/lazy.svg" data-src="images/icon/icon_12.svg" alt="" className="w-6 h-6" />
                    </div>
                    <div className="sm:order-0">
                      <span className="text-gray-600 text-sm">All Properties</span>
                      <div className="value font-medium text-xl">1.7k+</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col">
                <div className="dash-card-one bg-white rounded-3xl relative mb-4 p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="icon rounded-full w-12 h-12 flex items-center justify-center bg-orange-100 mb-3 sm:mb-0 sm:order-1">
                      <img src="../images/lazy.svg" data-src="images/icon/icon_13.svg" alt="" className="w-6 h-6" />
                    </div>
                    <div className="sm:order-0">
                      <span className="text-gray-600 text-sm">Total Pending</span>
                      <div className="value font-medium text-xl">03</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col">
                <div className="dash-card-one bg-white rounded-3xl relative mb-4 p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="icon rounded-full w-12 h-12 flex items-center justify-center bg-green-100 mb-3 sm:mb-0 sm:order-1">
                      <img src="../images/lazy.svg" data-src="images/icon/icon_14.svg" alt="" className="w-6 h-6" />
                    </div>
                    <div className="sm:order-0">
                      <span className="text-gray-600 text-sm">Total Views</span>
                      <div className="value font-medium text-xl">4.8k</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="col">
                <div className="dash-card-one bg-white rounded-3xl relative mb-4 p-6 shadow-sm">
                  <div className="flex flex-col sm:flex-row items-center justify-between">
                    <div className="icon rounded-full w-12 h-12 flex items-center justify-center bg-purple-100 mb-3 sm:mb-0 sm:order-1">
                      <img src="../images/lazy.svg" data-src="images/icon/icon_15.svg" alt="" className="w-6 h-6" />
                    </div>
                    <div className="sm:order-0">
                      <span className="text-gray-600 text-sm">Total Favourites</span>
                      <div className="value font-medium text-xl">07</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-7 gap-6 pt-6 px-6">
            <div className="col-xl-7 col-lg-6">
              <div className="user-activity-chart bg-white rounded-2xl p-6 mt-6 h-full shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h5 className="dash-title-two text-lg font-semibold">Property View</h5>
                  <div className="short-filter flex items-center">
                    <div className="text-sm mr-2">Short by:</div>
                    <select className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="0">Weekly</option>
                      <option value="1">Daily</option>
                      <option value="2">Monthly</option>
                    </select>
                  </div>
                </div>
                <div className="mt-12">
                  <div className="chart-wrapper h-64">
                    <canvas id="property-chart"></canvas>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-xl-5 col-lg-6">
              <div className="recent-job-tab bg-white rounded-2xl p-6 mt-6 w-full shadow-sm">
                <h5 className="dash-title-two text-lg font-semibold mb-6">Recent Message</h5>
                <div className="message-wrapper">
                  <div className="message-sidebar">
                    <div className="email-read-panel space-y-4">
                      <div className="email-list-item read border-b pb-4">
                        <div className="email-short-preview relative">
                          <div className="flex items-center justify-between mb-2">
                            <div className="sender-name font-medium">Jenny Rio.</div>
                            <div className="date text-sm text-gray-600">Aug 22</div>
                          </div>
                          <div className="mail-sub font-medium text-gray-800 mb-2">Work inquiry from google.</div>
                          <div className="mail-text text-gray-600 text-sm mb-3">
                            Hello, This is Jenny from google. We'r the largest online platform offer...
                          </div>
                          <div className="attached-file-preview flex items-center mt-4">
                            <div className="file flex items-center mr-3">
                              <img src="../images/lazy.svg" data-src="images/icon/icon_28.svg" alt="" className="w-4 h-4 mr-2" />
                              <span className="text-sm text-gray-600">details.pdf</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="email-list-item primary border-b pb-4">
                        <div className="email-short-preview relative">
                          <div className="flex items-center justify-between mb-2">
                            <div className="sender-name font-medium">Hasan Islam.</div>
                            <div className="date text-sm text-gray-600">May 22</div>
                          </div>
                          <div className="mail-sub font-medium text-gray-800 mb-2">Product Designer Opportunities</div>
                          <div className="mail-text text-gray-600 text-sm">
                            Hello, Greeting from Uber. Hope you doing great. I am approcing to you for..
                          </div>
                        </div>
                      </div>
                      
                      <div className="email-list-item border-b pb-4">
                        <div className="email-short-preview relative">
                          <div className="flex items-center justify-between mb-2">
                            <div className="sender-name font-medium">Jakie Chan</div>
                            <div className="date text-sm text-gray-600">July 22</div>
                          </div>
                          <div className="mail-sub font-medium text-gray-800 mb-2">Hunting Marketing Specialist</div>
                          <div className="mail-text text-gray-600 text-sm">
                            Hello, This is Jannat from HuntX. We offer business solution to our client..
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 