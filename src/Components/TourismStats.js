import React from 'react';
{/*import './tourismStats.css'*/}

function TourismStats() {
    return (
        <div>

            <section className="section sec-home bg-blue">
                <div className="container">
                    <header className="title-bar text-center">
                        <h3 className="title-md"><strong>3<sup>rd</sup> Tourism Satellite Account of India</strong><br />Reference Year: 2015-16</h3>
                    </header>
                    <div className="text-center">
                        <img src="images/infographics1.png" alt="" />
                    </div>

                    <section className="section">
                        <div className="hp-card-group">
                            <div className="hp-card">
                                <div className="hp-card-body">
                                    <div className="data-table">
                                        <div className="data-cell">
                                            <h4>Value of Tourism Direct GVA</h4>
                                            <div className="value">
                                                <small>INR</small>
                                                <strong>3.46</strong>
                                                <span>Trillion</span>
                                            </div>
                                        </div>
                                        <div className="data-cell">
                                            <h4>Value of Tourism Direct GDP</h4>
                                            <div className="value">
                                                <small>INR</small>
                                                <strong>3.64</strong>
                                                <span>Trillion</span>
                                            </div>
                                        </div>
                                        <div className="data-cell">
                                            <h4>Tourism Direct Jobs</h4>
                                            <div className="value">
                                                <strong>31.5</strong>
                                                <span>Million</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hp-card">
                                <div className="hp-card-body">
                                    <div className="data-table">
                                        <div className="data-cell">
                                            <h4>Total Inbound Tourists</h4>
                                            <div className="value">
                                                <strong>13.52</strong>
                                                <span>Million</span>
                                            </div>
                                        </div>
                                        <div className="data-cell">
                                            <h4>Total Outbound Tourists</h4>
                                            <div className="value">
                                                <strong>20.29</strong>
                                                <span>Million</span>
                                            </div>
                                        </div>
                                        <div className="data-cell">
                                            <h4>Total Domestic Trips</h4>
                                            <div className="value">
                                                <strong>1201.96</strong>
                                                <span>Million</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <header className="title-bar text-center">
                        <h3 className="title-md"><strong>Value of total tourism consumption INR 9.5 trillion</strong><br />Distribution by types</h3>
                    </header>
                    <div className="text-center">
                        <img src="images/infograhics3.png" alt="" />
                    </div>

                    <section className="section hp-graph">

                        <div className="row">
                            <div className="col-sm-6 hp-graph-chart">
                                <header className="title-bar">
                                    <h3 className="title-md">Share of Tourism in State’s GVA</h3>
                                </header>

                                <div className="graph-head">
                                    <ul className="list-unstyled">
                                        <li className="cell-1">Direct (%)</li>
                                        <li className="cell-2">Indirect (%)</li>
                                        <li className="cell-3">Total (%)</li>
                                    </ul>
                                </div>
                                <ul className="list-unstyled graph-list">
                                    <li className="data-table">
                                        <div className="data-cell cell-1">Goa</div>
                                        <div className="hp-graph-bar" style={{ width: "100%" }}>
                                            <div className="data-cell cell-2" style={{ width: "47.6%" }}>5.50</div>
                                            <div className="data-cell cell-3" style={{ width: "52.4%" }}>6.05</div>
                                            <div className="data-cell cell-4">11.55</div>
                                        </div>
                                    </li>

                                    <li className="data-table">
                                        <div className="data-cell cell-1">Andaman &amp; Nicobar Islands</div>
                                        <div className="hp-graph-bar" style={{ width: '90%' }}>
                                            <div className="data-cell cell-2" style={{ width: '44.5%' }}>4.63</div>
                                            <div className="data-cell cell-3" style={{ width: '55.5%' }}>5.76</div>
                                            <div className="data-cell cell-4">10.39</div>
                                        </div>
                                    </li>
                                    <li className="data-table">
                                        <div className="data-cell cell-1">Chandigarh</div>
                                        <div className="hp-graph-bar" style={{ width: '85%' }}>
                                            <div className="data-cell cell-2" style={{ width: '42.2%' }}>3.87</div>
                                            <div className="data-cell cell-3" style={{ width: '57.8%' }}>5.30</div>
                                            <div className="data-cell cell-4">9.17</div>
                                        </div>
                                    </li>
                                    <li className="data-table">
                                        <div className="data-cell cell-1">Lakshadweep</div>
                                        <div className="hp-graph-bar" style={{ width: '80%' }}>
                                            <div className="data-cell cell-2" style={{ width: '47.6%' }}>4.30</div>
                                            <div className="data-cell cell-3" style={{ width: '52.4%' }}>4.73</div>
                                            <div className="data-cell cell-4">9.02</div>
                                        </div>
                                    </li>
                                    <li className="data-table">
                                        <div className="data-cell cell-1">Kerala</div>
                                        <div className="hp-graph-bar" style={{ width: '75%' }}>
                                            <div className="data-cell cell-2" style={{ width: '49.7%' }}>4.34</div>
                                            <div className="data-cell cell-3" style={{ width: '51.3%' }}>4.38</div>
                                            <div className="data-cell cell-4">8.72</div>
                                        </div>
                                    </li>
                                    <li className="data-table">
                                        <div className="data-cell cell-1">Delhi</div>
                                        <div className="hp-graph-bar" style={{ width: '70%' }}>
                                            <div className="data-cell cell-2" style={{ width: '55.4%' }}>4.32</div>
                                            <div className="data-cell cell-3" style={{ width: '44.6%' }}>3.47</div>
                                            <div className="data-cell cell-4">7.78</div>
                                        </div>
                                    </li>
                                    <li className="data-table">
                                        <div className="data-cell cell-1">Jammu &amp; Kashmir</div>
                                        <div className="hp-graph-bar" style={{ width: '66%' }}>
                                            <div className="data-cell cell-2" style={{ width: '49.1%' }}>3.68</div>
                                            <div className="data-cell cell-3" style={{ width: '50.9%' }}>3.81</div>
                                            <div className="data-cell cell-4">7.48</div>
                                        </div>
                                    </li>
                                    <li className="data-table">
                                        <div className="data-cell cell-1">Himachal Pradesh</div>
                                        <div className="hp-graph-bar" style={{ width: '60%' }}>
                                            <div className="data-cell cell-2" style={{ width: '46.5%' }}>3.20</div>
                                            <div className="data-cell cell-3" style={{ width: '53.5%' }}>3.69</div>
                                            <div className="data-cell cell-4">6.89</div>
                                        </div>
                                    </li>
                                    <li className="data-table">
                                        <div className="data-cell cell-1">Bihar</div>
                                        <div className="hp-graph-bar" style={{ width: '55%' }}>
                                            <div className="data-cell cell-2" style={{ width: '49.4%' }}>2.96</div>
                                            <div className="data-cell cell-3" style={{ width: '50.6%' }}>3.03</div>
                                            <div className="data-cell cell-4">5.99</div>
                                        </div>
                                    </li>
                                    <li className="data-table">
                                        <div className="data-cell cell-1">Karnataka</div>
                                        <div className="hp-graph-bar" style={{ width: '54.5%' }}>
                                            <div className="data-cell cell-2" style={{ width: '45.8%' }}>2.63</div>
                                            <div className="data-cell cell-3" style={{ width: '54.2%' }}>3.11</div>
                                            <div className="data-cell cell-4">5.74</div>
                                        </div>
                                    </li>
                                    <li className="data-table">
                                        <div className="data-cell cell-1">Rajasthan</div>
                                        <div className="hp-graph-bar" style={{ width: '53%' }}>
                                            <div className="data-cell cell-2" style={{ width: '48.6%' }}>2.73</div>
                                            <div className="data-cell cell-3" style={{ width: '51.4%' }}>2.90</div>
                                            <div className="data-cell cell-4">5.63</div>
                                        </div>
                                    </li>
                            
                            <li className="data-table">
                                <div className="data-cell cell-1">Maharashtra</div>
                                <div className="hp-graph-bar" style={{ width: '52%' }}>
                                    <div className="data-cell cell-2" style={{ width: '55.8%' }}>3.08</div>
                                    <div className="data-cell cell-3" style={{ width: '44.2%' }}>2.44</div>
                                    <div className="data-cell cell-4">5.52</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Manipur</div>
                                <div className="hp-graph-bar" style={{ width: '51.7%' }}>
                                    <div className="data-cell cell-2" style={{ width: '43.2%' }}>2.38</div>
                                    <div className="data-cell cell-3" style={{ width: '56.8%' }}>3.12</div>
                                    <div className="data-cell cell-4">5.50</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Tamil Nadu</div>
                                <div className="hp-graph-bar" style={{ width: '50.5%' }}>
                                    <div className="data-cell cell-2" style={{ width: '48.2%' }}>2.59</div>
                                    <div className="data-cell cell-3" style={{ width: '51.8%' }}>2.78</div>
                                    <div className="data-cell cell-4">5.37</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1 active">All India</div>
                                <div className="hp-graph-bar" style={{ width: '50%' }}>
                                    <div className="data-cell cell-2" style={{ width: '52%' }}>2.78</div>
                                    <div className="data-cell cell-3" style={{ width: '48%' }}>2.57</div>
                                    <div className="data-cell cell-4">5.35</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Uttarakhand</div>
                                <div className="hp-graph-bar" style={{ width: '49%' }}>
                                    <div className="data-cell cell-2" style={{ width: '43.4%' }}>2.29</div>
                                    <div className="data-cell cell-3" style={{ width: '56.6%' }}>2.98</div>
                                    <div className="data-cell cell-4">5.27</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Meghalaya</div>
                                <div className="hp-graph-bar" style={{ width: '48%' }}>
                                    <div className="data-cell cell-2" style={{ width: '45.8%' }}>2.39</div>
                                    <div className="data-cell cell-3" style={{ width: '54.2%' }}>2.83</div>
                                    <div className="data-cell cell-4">5.22</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Telangana</div>
                                <div className="hp-graph-bar" style={{ width: '47.5%' }}>
                                    <div className="data-cell cell-2" style={{ width: '45.1%' }}>2.29</div>
                                    <div className="data-cell cell-3" style={{ width: '54.9%' }}>2.78</div>
                                    <div className="data-cell cell-4">5.07</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Odisha</div>
                                <div className="hp-graph-bar" style={{ width: '47%' }}>
                                    <div className="data-cell cell-2" style={{ width: '48.7%' }}>2.43</div>
                                    <div className="data-cell cell-3" style={{ width: '51.3%' }}>2.57</div>
                                    <div className="data-cell cell-4">5.00</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Madhya Pradesh</div>
                                <div className="hp-graph-bar" style={{ width: '46%' }}>
                                    <div className="data-cell cell-2" style={{ width: '48.8%' }}>2.39</div>
                                    <div className="data-cell cell-3" style={{ width: '51.2%' }}>2.51</div>
                                    <div className="data-cell cell-4">4.90</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Andhra Pradesh</div>
                                <div className="hp-graph-bar" style={{ width: '45%' }}>
                                    <div className="data-cell cell-2" style={{ width: '49%' }}>2.29</div>
                                    <div className="data-cell cell-3" style={{ width: '51%' }}>2.38</div>
                                    <div className="data-cell cell-4">4.66</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Uttar Pradesh</div>
                                <div className="hp-graph-bar" style={{ width: '44.5%' }}>
                                    <div className="data-cell cell-2" style={{ width: '48.3%' }}>2.24</div>
                                    <div className="data-cell cell-3" style={{ width: '51.7%' }}>2.40</div>
                                    <div className="data-cell cell-4">4.63</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Chhattisgarh</div>
                                <div className="hp-graph-bar" style={{ width: '44%' }}>
                                    <div className="data-cell cell-2" style={{ width: '47.9%' }}>2.13</div>
                                    <div className="data-cell cell-3" style={{ width: '52.1%' }}>2.31</div>
                                    <div className="data-cell cell-4">4.44</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Sikkim</div>
                                <div className="hp-graph-bar" style={{ width: '43%' }}>
                                    <div className="data-cell cell-2" style={{ width: '48.1%' }}>2.12</div>
                                    <div className="data-cell cell-3" style={{ width: '51.9%' }}>2.28</div>
                                    <div className="data-cell cell-4">4.40</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Assam</div>
                                <div className="hp-graph-bar" style={{ width: '42%' }}>
                                    <div className="data-cell cell-2" style={{ width: '50.8%' }}>2.19</div>
                                    <div className="data-cell cell-3" style={{ width: '49.2%' }}>2.12</div>
                                    <div className="data-cell cell-4">4.32</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">West Bengal</div>
                                <div className="hp-graph-bar" style={{ width: '41%' }}>
                                    <div className="data-cell cell-2" style={{ width: '48.6%' }}>2.09</div>
                                    <div className="data-cell cell-3" style={{ width: '51.4%' }}>2.21</div>
                                    <div className="data-cell cell-4">4.30</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Jharkhand</div>
                                <div className="hp-graph-bar" style={{ width: '40%' }}>
                                    <div className="data-cell cell-2" style={{ width: '50.3%' }}>2.10</div>
                                    <div className="data-cell cell-3" style={{ width: '49.7%' }}>2.07</div>
                                    <div className="data-cell cell-4">4.18</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Puducherry</div>
                                <div className="hp-graph-bar" style={{ width: '39%' }}>
                                    <div className="data-cell cell-2" style={{ width: '42.4%' }}>1.73</div>
                                    <div className="data-cell cell-3" style={{ width: '57.6%' }}>2.35</div>
                                    <div className="data-cell cell-4">4.08</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Gujarat</div>
                                <div className="hp-graph-bar" style={{ width: '38.5%' }}>
                                    <div className="data-cell cell-2" style={{ width: '45.1%' }}>1.78</div>
                                    <div className="data-cell cell-3" style={{ width: '54.9%' }}>2.17</div>
                                    <div className="data-cell cell-4">3.96</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Haryana</div>
                                <div className="hp-graph-bar" style={{ width: '38%' }}>
                                    <div className="data-cell cell-2" style={{ width: '50.2%' }}>1.95</div>
                                    <div className="data-cell cell-3" style={{ width: '49.8%' }}>1.93</div>
                                    <div className="data-cell cell-4">3.88</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Punjab</div>
                                <div className="hp-graph-bar" style={{ width: '37%' }}>
                                    <div className="data-cell cell-2" style={{ width: '50.8%' }}>1.90</div>
                                    <div className="data-cell cell-3" style={{ width: '49.2%' }}>1.84</div>
                                    <div className="data-cell cell-4">3.75</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Nagaland</div>
                                <div className="hp-graph-bar" style={{ width: '36%' }}>
                                    <div className="data-cell cell-2" style={{ width: '52.6%' }}>1.87</div>
                                    <div className="data-cell cell-3" style={{ width: '47.4%' }}>1.68</div>
                                    <div className="data-cell cell-4">3.55</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Tripura</div>
                                <div className="hp-graph-bar" style={{ width: '34%' }}>
                                    <div className="data-cell cell-2" style={{ width: '51.3%' }}>1.53</div>
                                    <div className="data-cell cell-3" style={{ width: '48.7%' }}>1.46</div>
                                    <div className="data-cell cell-4">2.99</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Mizoram</div>
                                <div className="hp-graph-bar" style={{ width: '33%' }}>
                                    <div className="data-cell cell-2" style={{ width: '48.9%' }}>1.25</div>
                                    <div className="data-cell cell-3" style={{ width: '51.1%' }}>1.30</div>
                                    <div className="data-cell cell-4">2.55</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Arunachal Pradesh</div>
                                <div className="hp-graph-bar" style={{ width: '32%' }}>
                                    <div className="data-cell cell-2" style={{ width: '50.6%' }}>1.21</div>
                                    <div className="data-cell cell-3" style={{ width: '49.4%' }}>1.18</div>
                                    <div className="data-cell cell-4">2.39</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Dadra &amp; Nagar Haveli</div>
                                <div className="hp-graph-bar" style={{ width: '31%' }}>
                                    <div className="data-cell cell-2" style={{ width: '44%' }}>0.79</div>
                                    <div className="data-cell cell-3" style={{ width: '56%' }}>1.00</div>
                                    <div className="data-cell cell-4">1.79</div>
                                </div>
                            </li>
                            <li className="data-table">
                                <div className="data-cell cell-1">Daman &amp; Diu</div>
                                <div className="hp-graph-bar" style={{ width: '30%' }}>
                                    <div className="data-cell cell-2" style={{ width: '55%' }}>0.75</div>
                                    <div className="data-cell cell-3" style={{ width: '45%' }}>0.61</div>
                                    <div className="data-cell cell-4">1.36</div>
                                </div>
                            </li>
                        </ul>
                </div>
                <div className="col-sm-6 hp-graph-chart">
                    <header className="title-bar">
                        <h3 className="title-md">Share of Tourism in State’s Employment</h3>
                    </header>
                    <div className="graph-head">
                        <ul className="list-unstyled">
                            <li className="cell-1">Direct (%)</li>
                            <li className="cell-2">Indirect (%)</li>
                            <li className="cell-3">Total (%)</li>
                        </ul>
                    </div>
                    <ul className="list-unstyled graph-list">
                        <li className="data-table">
                            <div className="data-cell cell-1">Puducherry</div>
                            <div className="hp-graph-bar" style={{ width: '100%' }}>
                                <div className="data-cell cell-2" style={{ width: '25.3%' }}>14.25</div>
                                <div className="data-cell cell-3" style={{ width: '74.7%' }}>41.99</div>
                                <div className="data-cell cell-4">56.24</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Lakshadweep</div>
                            <div className="hp-graph-bar" style={{ width: '88%' }}>
                                <div className="data-cell cell-2" style={{ width: '44.1%' }}>21.95</div>
                                <div className="data-cell cell-3" style={{ width: '55.9%' }}>27.76</div>
                                <div className="data-cell cell-4">49.71</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Goa</div>
                            <div className="hp-graph-bar" style={{ width: '76%' }}>
                                <div className="data-cell cell-2" style={{ width: '47.3%' }}>19.38</div>
                                <div className="data-cell cell-3" style={{ width: '52.7%' }}>21.53</div>
                                <div className="data-cell cell-4">40.92</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Daman &amp; Diu</div>
                            <div className="hp-graph-bar" style={{ width: '65%' }}>
                                <div className="data-cell cell-2" style={{ width: '39.9%' }}>11.71</div>
                                <div className="data-cell cell-3" style={{ width: '61.1%' }}>17.65</div>
                                <div className="data-cell cell-4">28.35</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Kerala</div>
                            <div className="hp-graph-bar" style={{ width: '64%' }}>
                                <div className="data-cell cell-2" style={{ width: '43.3%' }}>11.20</div>
                                <div className="data-cell cell-3" style={{ width: '56.7%' }}>14.67</div>
                                <div className="data-cell cell-4">25.87</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Andaman &amp; Nicobar Islands</div>
                            <div className="hp-graph-bar" style={{ width: '61%' }}>
                                <div className="data-cell cell-2" style={{ width: '46%' }}>11.09</div>
                                <div className="data-cell cell-3" style={{ width: '54%' }}>12.99</div>
                                <div className="data-cell cell-4">24.07</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Dadra &amp; Nagar Haveli</div>
                            <div className="hp-graph-bar" style={{ width: '58%' }}>
                                <div className="data-cell cell-2" style={{ width: '29.4%' }}>7.01</div>
                                <div className="data-cell cell-3" style={{ width: '70.6%' }}>16.79</div>
                                <div className="data-cell cell-4">23.81</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Uttarakhand</div>
                            <div className="hp-graph-bar" style={{ width: "57%" }} >
                                <div className="data-cell cell-2" style={{ width: "37.8%" }} >7.99</div>
                                <div className="data-cell cell-3" style={{ width: "62.2%" }} >13.19</div>
                                <div className="data-cell cell-4">21.18</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Delhi</div>
                            <div className="hp-graph-bar" style={{ width: "56%" }}>
                                <div className="data-cell cell-2" style={{ width: "59%" }}>12.40</div>
                                <div className="data-cell cell-3" style={{ width: "41%" }}>8.64</div>
                                <div className="data-cell cell-4">21.05</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Himachal Pradesh</div>
                            <div className="hp-graph-bar" style={{ width: "55%" }}>
                                <div className="data-cell cell-2" style={{ width: "50.6%" }}>10.23</div>
                                <div className="data-cell cell-3" style={{ width: "49.4%" }}>10.00</div>
                                <div className="data-cell cell-4">20.23</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Telangana</div>
                            <div className="hp-graph-bar" style={{ width: "53%" }}>
                                <div className="data-cell cell-2" style={{ width: "28.8%" }}>5.13</div>
                                <div className="data-cell cell-3" style={{ width: "71.2%" }}>12.70</div>
                                <div className="data-cell cell-4">17.83</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Karnataka</div>
                            <div className="hp-graph-bar" style={{ width: "52%" }}>
                                <div className="data-cell cell-2" style={{ width: "30.8%" }}>5.46</div>
                                <div className="data-cell cell-3" style={{ width: "69.2%" }}>12.27</div>
                                <div className="data-cell cell-4">17.74</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Jammu & Kashmir</div>
                            <div className="hp-graph-bar" style={{ width: "50%" }}>
                                <div className="data-cell cell-2" style={{ width: "40.9%" }}>6.74</div>
                                <div className="data-cell cell-3" style={{ width: "59.1%" }}>9.72</div>
                                <div className="data-cell cell-4">16.45</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Tamil Nadu</div>
                            <div className="hp-graph-bar" style={{ width: "49%" }}>
                                <div className="data-cell cell-2" style={{ width: "39.8%" }}>6.36</div>
                                <div className="data-cell cell-3" style={{ width: "60.2%" }}>9.61</div>
                                <div className="data-cell cell-4">15.97</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Gujarat</div>
                            <div className="hp-graph-bar" style={{ width: "46%" }}>
                                <div className="data-cell cell-2" style={{ width: "38%" }}>5.85</div>
                                <div className="data-cell cell-3" style={{ width: "62%" }}>9.55</div>
                                <div className="data-cell cell-4">15.39</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">West Bengal</div>
                            <div className="hp-graph-bar" style={{ width: '45%' }}>
                                <div className="data-cell cell-2" style={{ width: '44.7%' }}>6.41</div>
                                <div className="data-cell cell-3" style={{ width: '55.3%' }}>7.93</div>
                                <div className="data-cell cell-4">14.34</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Sikkim</div>
                            <div className="hp-graph-bar" style={{ width: '44%' }}>
                                <div className="data-cell cell-2" style={{ width: '52.3%' }}>6.84</div>
                                <div className="data-cell cell-3" style={{ width: '47.7%' }}>6.23</div>
                                <div className="data-cell cell-4">13.07</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Andhra Pradesh</div>
                            <div className="hp-graph-bar" style={{ width: '43%' }}>
                                <div className="data-cell cell-2" style={{ width: '42.1%' }}>5.41</div>
                                <div className="data-cell cell-3" style={{ width: '57.9%' }}>7.43</div>
                                <div className="data-cell cell-4">12.84</div>
                            </div>
                        </li>

                        <li className="data-table">
                            <div className="data-cell cell-1">Maharashtra</div>
                            <div className="hp-graph-bar" style={{ width: '42%' }}>
                                <div className="data-cell cell-2" style={{ width: '45.4%' }}>5.66</div>
                                <div className="data-cell cell-3" style={{ width: '54.6%' }}>6.80</div>
                                <div className="data-cell cell-4">12.46</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1 active">All India</div>
                            <div className="hp-graph-bar" style={{ width: '41.5%' }}>
                                <div className="data-cell cell-2" style={{ width: '43.6%' }}>5.40</div>
                                <div className="data-cell cell-3" style={{ width: '56.4%' }}>6.98</div>
                                <div className="data-cell cell-4">12.38</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Chandigarh</div>
                            <div className="hp-graph-bar" style={{ width: '41%' }}>
                                <div className="data-cell cell-2" style={{ width: '54.2%' }}>6.70</div>
                                <div className="data-cell cell-3" style={{ width: '45.8%' }}>5.66</div>
                                <div className="data-cell cell-4">12.37</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Punjab</div>
                            <div className="hp-graph-bar" style={{ width: '40.5%' }}>
                                <div className="data-cell cell-2" style={{ width: '54.2%' }}>6.69</div>
                                <div className="data-cell cell-3" style={{ width: '45.8%' }}>5.65</div>
                                <div className="data-cell cell-4">12.33</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Odisha</div>
                            <div className="hp-graph-bar" style={{ width: '40%' }}>
                                <div className="data-cell cell-2" style={{ width: '43.4%' }}>5.27</div>
                                <div className="data-cell cell-3" style={{ width: '56.6%' }}>6.84</div>
                                <div className="data-cell cell-4">12.11</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Manipur</div>
                            <div className="hp-graph-bar" style={{ width: '39.5%' }}>
                                <div className="data-cell cell-2" style={{ width: '51.9%' }}>6.25</div>
                                <div className="data-cell cell-3" style={{ width: '48.1%' }}>5.80</div>
                                <div className="data-cell cell-4">12.05</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Uttar Pradesh</div>
                            <div className="hp-graph-bar" style={{ width: '39%' }}>
                                <div className="data-cell cell-2" style={{ width: '39.1%' }}>4.46</div>
                                <div className="data-cell cell-3" style={{ width: '60.9%' }}>6.93</div>
                                <div className="data-cell cell-4">11.39</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Rajasthan</div>
                            <div className="hp-graph-bar" style={{ width: '38.7%' }}>
                                <div className="data-cell cell-2" style={{ width: '46%' }}>5.18</div>
                                <div className="data-cell cell-3" style={{ width: '54%' }}>6.08</div>
                                <div className="data-cell cell-4">11.26</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Mizoram</div>
                            <div className="hp-graph-bar" style={{ width: '37.5%' }}>
                                <div className="data-cell cell-2" style={{ width: '41.7%' }}>4.57</div>
                                <div className="data-cell cell-3" style={{ width: '58.3%' }}>6.38</div>
                                <div className="data-cell cell-4">10.96</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Bihar</div>
                            <div className="hp-graph-bar" style={{ width: '37%' }}>
                                <div className="data-cell cell-2" style={{ width: '39.7%' }}>4.17</div>
                                <div className="data-cell cell-3" style={{ width: '60.3%' }}>6.33</div>
                                <div className="data-cell cell-4">10.50</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Meghalaya</div>
                            <div className="hp-graph-bar" style={{ width: '36.5%' }}>
                                <div className="data-cell cell-2" style={{ width: '27.4%' }}>2.87</div>
                                <div className="data-cell cell-3" style={{ width: '72.6%' }}>7.57</div>
                                <div className="data-cell cell-4">10.44</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Haryana</div>
                            <div className="hp-graph-bar" style={{ width: '36%' }}>
                                <div className="data-cell cell-2" style={{ width: '58.9%' }}>5.98</div>
                                <div className="data-cell cell-3" style={{ width: '41.1%' }}>4.17</div>
                                <div className="data-cell cell-4">10.15</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Jharkhand</div>
                            <div className="hp-graph-bar" style={{ width: '34.5%' }}>
                                <div className="data-cell cell-2" style={{ width: '42.7%' }}>3.89</div>
                                <div className="data-cell cell-3" style={{ width: '57.3%' }}>5.23</div>
                                <div className="data-cell cell-4">9.12</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Assam</div>
                            <div className="hp-graph-bar" style={{ width: '34%' }}>
                                <div className="data-cell cell-2" style={{ width: '50.4%' }}>4.41</div>
                                <div className="data-cell cell-3" style={{ width: '49.6%' }}>4.34</div>
                                <div className="data-cell cell-4">8.75</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Madhya Pradesh</div>
                            <div className="hp-graph-bar" style={{ width: '33%' }}>
                                <div className="data-cell cell-2" style={{ width: '39.6%' }}>3.34</div>
                                <div className="data-cell cell-3" style={{ width: '60.4%' }}>5.11</div>
                                <div className="data-cell cell-4">8.45</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Nagaland</div>
                            <div className="hp-graph-bar" style={{ width: '32%' }}>
                                <div className="data-cell cell-2" style={{ width: '42.9%' }}>3.58</div>
                                <div className="data-cell cell-3" style={{ width: '57.1%' }}>4.76</div>
                                <div className="data-cell cell-4">8.34</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Chhattisgarh</div>
                            <div className="hp-graph-bar" style={{ width: '31%' }}>
                                <div className="data-cell cell-2" style={{ width: '31.4%' }}>2.41</div>
                                <div className="data-cell cell-3" style={{ width: '68.6%' }}>5.24</div>
                                <div className="data-cell cell-4">7.65</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Tripura</div>
                            <div className="hp-graph-bar" style={{ width: '28%' }}>
                                <div className="data-cell cell-2" style={{ width: '60.3%' }}>3.05</div>
                                <div className="data-cell cell-3" style={{ width: '39.7%' }}>2.01</div>
                                <div className="data-cell cell-4">5.05</div>
                            </div>
                        </li>
                        <li className="data-table">
                            <div className="data-cell cell-1">Arunachal Pradesh</div>
                            <div className="hp-graph-bar" style={{ width: '25%' }}>
                                <div className="data-cell cell-2" style={{ width: '46.1%' }}>2.20</div>
                                <div className="data-cell cell-3" style={{ width: '53.9%' }}>2.56</div>
                                <div className="data-cell cell-4">4.76</div>
                            </div>
                        </li>

                    </ul>
                </div>
        </div>
                    </section >

                </div >
            </section >

        </div >

    );
}

export default TourismStats;
