import React from 'react'

const RateCardTable = () => {
  return (
    <>
      <div className='row mb-5' style={{marginLeft: '20px'}}>
        <div className='row col-md-12'>
          <div className='col-md-3'>
            <label className=' fs-6 fw-bold mb-2'>Select Supplier</label>
            <select
              className='form-select form-select-solid select2-hidden-accessible'
              id='supplier'
              data-control='select2'
              data-placeholder='Select an option'
              data-select2-id='select2-data-supplier'
              tabIndex={-1}
              aria-hidden='true'
            >
              <option value=''>Select Supplier</option>
              <option value='ALL' data-select2-id='select2-data-14-3arz'>
                All
              </option>
              <option value='1'>Schlensinger</option>
              <option value='2'>GO Branded</option>
              <option value='3'>GMO</option>
              <option value='4'>Make Opinion</option>
            </select>
            <span
              className='select2 select2-container select2-container--bootstrap5'
              dir='ltr'
              data-select2-id='select2-data-13-eq6f'
              style={{width: '100%'}}
            >
              <span className='dropdown-wrapper' aria-hidden='true'></span>
            </span>
          </div>
          <div className='col-md-3'>
            <label className=' fs-6 fw-bold mb-2'>Select Country</label>
            <select
              className='form-select form-select-solid select2-hidden-accessible'
              id='country'
              data-control='select2'
              data-placeholder='Select an option'
              data-select2-id='select2-data-country'
              tabIndex={-1}
              aria-hidden='true'
            >
              <option value=''>Select Country</option>
              <option value='ALL' data-select2-id='select2-data-16-kmk6'>
                All
              </option>
              <option value='AF'>Afghanistan - AF</option>
              <option value='AL'>Albania - AL</option>
              <option value='DZ'>Algeria - DZ</option>
              <option value='AS'>American Samoa - AS</option>
              <option value='AD'>Andorra - AD</option>
              <option value='AO'>Angola - AO</option>
              <option value='AI'>Anguilla - AI</option>
              <option value='AQ'>Antarctica - AQ</option>
              <option value='AG'>Antigua And Barbuda - AG</option>
              <option value='AR'>Argentina - AR</option>
              <option value='AM'>Armenia - AM</option>
              <option value='AW'>Aruba - AW</option>
              <option value='AU'>Australia - AU</option>
              <option value='AT'>Austria - AT</option>
              <option value='AZ'>Azerbaijan - AZ</option>
              <option value='BS'>Bahamas The - BS</option>
              <option value='BH'>Bahrain - BH</option>
              <option value='BD'>Bangladesh - BD</option>
              <option value='BB'>Barbados - BB</option>
              <option value='BY'>Belarus - BY</option>
              <option value='BE'>Belgium - BE</option>
              <option value='BZ'>Belize - BZ</option>
              <option value='BJ'>Benin - BJ</option>
              <option value='BM'>Bermuda - BM</option>
              <option value='BT'>Bhutan - BT</option>
              <option value='BO'>Bolivia - BO</option>
              <option value='BA'>Bosnia and Herzegovina - BA</option>
              <option value='BW'>Botswana - BW</option>
              <option value='BV'>Bouvet Island - BV</option>
              <option value='BR'>Brazil - BR</option>
              <option value='IO'>British Indian Ocean Territory - IO</option>
              <option value='BN'>Brunei - BN</option>
              <option value='BG'>Bulgaria - BG</option>
              <option value='BF'>Burkina Faso - BF</option>
              <option value='BI'>Burundi - BI</option>
              <option value='KH'>Cambodia - KH</option>
              <option value='CM'>Cameroon - CM</option>
              <option value='CA'>Canada - CA</option>
              <option value='CV'>Cape Verde - CV</option>
              <option value='KY'>Cayman Islands - KY</option>
              <option value='CF'>Central African Republic - CF</option>
              <option value='TD'>Chad - TD</option>
              <option value='CL'>Chile - CL</option>
              <option value='CN'>China - CN</option>
              <option value='CX'>Christmas Island - CX</option>
              <option value='CC'>Cocos (Keeling) Islands - CC</option>
              <option value='CO'>Colombia - CO</option>
              <option value='KM'>Comoros - KM</option>
              <option value='CG'>Republic Of The Congo - CG</option>
              <option value='CD'>Democratic Republic Of The Congo - CD</option>
              <option value='CK'>Cook Islands - CK</option>
              <option value='CR'>Costa Rica - CR</option>
              <option value='CI'>Cote D'Ivoire (Ivory Coast) - CI</option>
              <option value='HR'>Croatia (Hrvatska) - HR</option>
              <option value='CU'>Cuba - CU</option>
              <option value='CY'>Cyprus - CY</option>
              <option value='CZ'>Czech Republic - CZ</option>
              <option value='DK'>Denmark - DK</option>
              <option value='DJ'>Djibouti - DJ</option>
              <option value='DM'>Dominica - DM</option>
              <option value='DO'>Dominican Republic - DO</option>
              <option value='TP'>East Timor - TP</option>
              <option value='EC'>Ecuador - EC</option>
              <option value='EG'>Egypt - EG</option>
              <option value='SV'>El Salvador - SV</option>
              <option value='GQ'>Equatorial Guinea - GQ</option>
              <option value='ER'>Eritrea - ER</option>
              <option value='EE'>Estonia - EE</option>
              <option value='ET'>Ethiopia - ET</option>
              <option value='XA'>External Territories of Australia - XA</option>
              <option value='FK'>Falkland Islands - FK</option>
              <option value='FO'>Faroe Islands - FO</option>
              <option value='FJ'>Fiji Islands - FJ</option>
              <option value='FI'>Finland - FI</option>
              <option value='FR'>France - FR</option>
              <option value='GF'>French Guiana - GF</option>
              <option value='PF'>French Polynesia - PF</option>
              <option value='TF'>French Southern Territories - TF</option>
              <option value='GA'>Gabon - GA</option>
              <option value='GM'>Gambia The - GM</option>
              <option value='GE'>Georgia - GE</option>
              <option value='DE'>Germany - DE</option>
              <option value='GH'>Ghana - GH</option>
              <option value='GI'>Gibraltar - GI</option>
              <option value='GR'>Greece - GR</option>
              <option value='GL'>Greenland - GL</option>
              <option value='GD'>Grenada - GD</option>
              <option value='GP'>Guadeloupe - GP</option>
              <option value='GU'>Guam - GU</option>
              <option value='GT'>Guatemala - GT</option>
              <option value='XU'>Guernsey and Alderney - XU</option>
              <option value='GN'>Guinea - GN</option>
              <option value='GW'>Guinea-Bissau - GW</option>
              <option value='GY'>Guyana - GY</option>
              <option value='HT'>Haiti - HT</option>
              <option value='HM'>Heard and McDonald Islands - HM</option>
              <option value='HN'>Honduras - HN</option>
              <option value='HK'>Hong Kong S.A.R. - HK</option>
              <option value='HU'>Hungary - HU</option>
              <option value='IS'>Iceland - IS</option>
              <option value='IN'>India - IN</option>
              <option value='ID'>Indonesia - ID</option>
              <option value='IR'>Iran - IR</option>
              <option value='IQ'>Iraq - IQ</option>
              <option value='IE'>Ireland - IE</option>
              <option value='IL'>Israel - IL</option>
              <option value='IT'>Italy - IT</option>
              <option value='JM'>Jamaica - JM</option>
              <option value='JP'>Japan - JP</option>
              <option value='XJ'>Jersey - XJ</option>
              <option value='JO'>Jordan - JO</option>
              <option value='KZ'>Kazakhstan - KZ</option>
              <option value='KE'>Kenya - KE</option>
              <option value='KI'>Kiribati - KI</option>
              <option value='KP'>Korea North - KP</option>
              <option value='KR'>Korea South - KR</option>
              <option value='KW'>Kuwait - KW</option>
              <option value='KG'>Kyrgyzstan - KG</option>
              <option value='LA'>Laos - LA</option>
              <option value='LV'>Latvia - LV</option>
              <option value='LB'>Lebanon - LB</option>
              <option value='LS'>Lesotho - LS</option>
              <option value='LR'>Liberia - LR</option>
              <option value='LY'>Libya - LY</option>
              <option value='LI'>Liechtenstein - LI</option>
              <option value='LT'>Lithuania - LT</option>
              <option value='LU'>Luxembourg - LU</option>
              <option value='MO'>Macau S.A.R. - MO</option>
              <option value='MK'>Macedonia - MK</option>
              <option value='MG'>Madagascar - MG</option>
              <option value='MW'>Malawi - MW</option>
              <option value='MY'>Malaysia - MY</option>
              <option value='MV'>Maldives - MV</option>
              <option value='ML'>Mali - ML</option>
              <option value='MT'>Malta - MT</option>
              <option value='XM'>Man (Isle of) - XM</option>
              <option value='MH'>Marshall Islands - MH</option>
              <option value='MQ'>Martinique - MQ</option>
              <option value='MR'>Mauritania - MR</option>
              <option value='MU'>Mauritius - MU</option>
              <option value='YT'>Mayotte - YT</option>
              <option value='MX'>Mexico - MX</option>
              <option value='FM'>Micronesia - FM</option>
              <option value='MD'>Moldova - MD</option>
              <option value='MC'>Monaco - MC</option>
              <option value='MN'>Mongolia - MN</option>
              <option value='MS'>Montserrat - MS</option>
              <option value='MA'>Morocco - MA</option>
              <option value='MZ'>Mozambique - MZ</option>
              <option value='MM'>Myanmar - MM</option>
              <option value='NA'>Namibia - NA</option>
              <option value='NR'>Nauru - NR</option>
              <option value='NP'>Nepal - NP</option>
              <option value='AN'>Netherlands Antilles - AN</option>
              <option value='NL'>Netherlands The - NL</option>
              <option value='NC'>New Caledonia - NC</option>
              <option value='NZ'>New Zealand - NZ</option>
              <option value='NI'>Nicaragua - NI</option>
              <option value='NE'>Niger - NE</option>
              <option value='NG'>Nigeria - NG</option>
              <option value='NU'>Niue - NU</option>
              <option value='NF'>Norfolk Island - NF</option>
              <option value='MP'>Northern Mariana Islands - MP</option>
              <option value='NO'>Norway - NO</option>
              <option value='OM'>Oman - OM</option>
              <option value='PK'>Pakistan - PK</option>
              <option value='PW'>Palau - PW</option>
              <option value='PS'>Palestinian Territory Occupied - PS</option>
              <option value='PA'>Panama - PA</option>
              <option value='PG'>Papua new Guinea - PG</option>
              <option value='PY'>Paraguay - PY</option>
              <option value='PE'>Peru - PE</option>
              <option value='PH'>Philippines - PH</option>
              <option value='PN'>Pitcairn Island - PN</option>
              <option value='PL'>Poland - PL</option>
              <option value='PT'>Portugal - PT</option>
              <option value='PR'>Puerto Rico - PR</option>
              <option value='QA'>Qatar - QA</option>
              <option value='RE'>Reunion - RE</option>
              <option value='RO'>Romania - RO</option>
              <option value='RU'>Russia - RU</option>
              <option value='RW'>Rwanda - RW</option>
              <option value='SH'>Saint Helena - SH</option>
              <option value='KN'>Saint Kitts And Nevis - KN</option>
              <option value='LC'>Saint Lucia - LC</option>
              <option value='PM'>Saint Pierre and Miquelon - PM</option>
              <option value='VC'>Saint Vincent And The Grenadines - VC</option>
              <option value='WS'>Samoa - WS</option>
              <option value='SM'>San Marino - SM</option>
              <option value='ST'>Sao Tome and Principe - ST</option>
              <option value='SA'>Saudi Arabia - SA</option>
              <option value='SN'>Senegal - SN</option>
              <option value='RS'>Serbia - RS</option>
              <option value='SC'>Seychelles - SC</option>
              <option value='SL'>Sierra Leone - SL</option>
              <option value='SG'>Singapore - SG</option>
              <option value='SK'>Slovakia - SK</option>
              <option value='SI'>Slovenia - SI</option>
              <option value='XG'>Smaller Territories of the UK - XG</option>
              <option value='SB'>Solomon Islands - SB</option>
              <option value='SO'>Somalia - SO</option>
              <option value='ZA'>South Africa - ZA</option>
              <option value='GS'>South Georgia - GS</option>
              <option value='SS'>South Sudan - SS</option>
              <option value='ES'>Spain - ES</option>
              <option value='LK'>Sri Lanka - LK</option>
              <option value='SD'>Sudan - SD</option>
              <option value='SR'>Suriname - SR</option>
              <option value='SJ'>Svalbard And Jan Mayen Islands - SJ</option>
              <option value='SZ'>Swaziland - SZ</option>
              <option value='SE'>Sweden - SE</option>
              <option value='CH'>Switzerland - CH</option>
              <option value='SY'>Syria - SY</option>
              <option value='TW'>Taiwan - TW</option>
              <option value='TJ'>Tajikistan - TJ</option>
              <option value='TZ'>Tanzania - TZ</option>
              <option value='TH'>Thailand - TH</option>
              <option value='TG'>Togo - TG</option>
              <option value='TK'>Tokelau - TK</option>
              <option value='TO'>Tonga - TO</option>
              <option value='TT'>Trinidad And Tobago - TT</option>
              <option value='TN'>Tunisia - TN</option>
              <option value='TR'>Turkey - TR</option>
              <option value='TM'>Turkmenistan - TM</option>
              <option value='TC'>Turks And Caicos Islands - TC</option>
              <option value='TV'>Tuvalu - TV</option>
              <option value='UG'>Uganda - UG</option>
              <option value='UA'>Ukraine - UA</option>
              <option value='AE'>United Arab Emirates - AE</option>
              <option value='GB'>United Kingdom - GB</option>
              <option value='US'>United States - US</option>
              <option value='UM'>United States Minor Outlying Islands - UM</option>
              <option value='UY'>Uruguay - UY</option>
              <option value='UZ'>Uzbekistan - UZ</option>
              <option value='VU'>Vanuatu - VU</option>
              <option value='VA'>Vatican City State (Holy See) - VA</option>
              <option value='VE'>Venezuela - VE</option>
              <option value='VN'>Vietnam - VN</option>
              <option value='VG'>Virgin Islands (British) - VG</option>
              <option value='VI'>Virgin Islands (US) - VI</option>
              <option value='WF'>Wallis And Futuna Islands - WF</option>
              <option value='EH'>Western Sahara - EH</option>
              <option value='YE'>Yemen - YE</option>
              <option value='YU'>Yugoslavia - YU</option>
              <option value='ZM'>Zambia - ZM</option>
              <option value='ZW'>Zimbabwe - ZW</option>
            </select>
            <span
              className='select2 select2-container select2-container--bootstrap5'
              dir='ltr'
              data-select2-id='select2-data-15-3y7k'
              style={{width: '100%'}}
            >
              <span className='dropdown-wrapper' aria-hidden='true'></span>
            </span>
          </div>
          <div className='col-md-3'></div>
          <div
            className='col-md-3'
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <label></label>
            <a
              className='btn btn-warning btn-sm pull-right mt-8'
              href='https://uatgmos.rapidsay.com/export'
            >
              Export Rate Card
            </a>
          </div>
        </div>
        <div className='table-responsive'>
          <div id='kt_table_users_wrapper' className='dataTables_wrapper dt-bootstrap4 no-footer'>
            <div className='row'>
              <div className='col-sm-12 col-md-6'>
                <div className='dataTables_length' id='kt_table_users_length'>
                  <label style={{display: 'flex', alignItems: 'center'}}>
                    Show{' '}
                    <select
                      name='kt_table_users_length'
                      aria-controls='kt_table_users'
                      className='custom-select custom-select-sm form-control form-control-sm'
                      style={{marginLeft: '10px', marginRight: '10px', width: '50px'}}
                    >
                      <option value='10'>10</option>
                      <option value='25'>25</option>
                      <option value='50'>50</option>
                      <option value='100'>100</option>
                    </select>
                    entries
                  </label>
                </div>
              </div>
              <div className='col-sm-12 col-md-6'>
                <div id='kt_table_users_filter' className='dataTables_filter'>
                  <label
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      marginRight: '20px',
                    }}
                  >
                    Search:
                    <input
                      type='search'
                      className='form-control form-control-sm'
                      placeholder=''
                      aria-controls='kt_table_users'
                      style={{width: '400px', marginLeft: '10px'}}
                    />
                  </label>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-12'>
                <table
                  className='table table-striped gy-7 gs-7 no-footer dataTable'
                  id='kt_table_users'
                  role='grid'
                  aria-describedby='kt_table_users_info'
                  style={{width: '1142px'}}
                >
                  <thead>
                    <tr
                      className='fw-bold fs-6 text-gray-800 border-bottom-2 border-gray-200'
                      role='row'
                    >
                      <th
                        className='sorting sorting_asc'
                        tabIndex={0}
                        aria-controls='kt_table_users'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '102px'}}
                        aria-label='Country Codes: activate to sort column descending'
                        aria-sort='ascending'
                      >
                        Country Codes
                      </th>
                      <th
                        style={{width: '50px'}}
                        className='sorting'
                        tabIndex={0}
                        aria-controls='kt_table_users'
                        rowSpan={1}
                        colSpan={1}
                        aria-label='Supplier: activate to sort column ascending'
                      >
                        Supplier
                      </th>
                      <th
                        className='sorting'
                        tabIndex={0}
                        aria-controls='kt_table_users'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '30px'}}
                        aria-label='Type: activate to sort column ascending'
                      >
                        Type
                      </th>
                      <th
                        className='sorting'
                        tabIndex={0}
                        aria-controls='kt_table_users'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '65.5px'}}
                        aria-label='Margin %: activate to sort column ascending'
                      >
                        Margin %
                      </th>
                      <th
                        className='sorting'
                        tabIndex={0}
                        aria-controls='kt_table_users'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '25px'}}
                        aria-label='LOI: activate to sort column ascending'
                      >
                        LOI
                      </th>
                      <th
                        className='sorting'
                        tabIndex={0}
                        aria-controls='kt_table_users'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '36.5px'}}
                        aria-label='5-9%: activate to sort column ascending'
                      >
                        5-9%
                      </th>
                      <th
                        className='sorting'
                        tabIndex={0}
                        aria-controls='kt_table_users'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '45.5px'}}
                        aria-label='10-19%: activate to sort column ascending'
                      >
                        10-19%
                      </th>
                      <th
                        className='sorting'
                        tabIndex={0}
                        aria-controls='kt_table_users'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '51.5px'}}
                        aria-label='20-29%: activate to sort column ascending'
                      >
                        20-29%
                      </th>
                      <th
                        className='sorting'
                        tabIndex={0}
                        aria-controls='kt_table_users'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '52.5px'}}
                        aria-label='30-49%: activate to sort column ascending'
                      >
                        30-49%
                      </th>
                      <th
                        className='sorting'
                        tabIndex={0}
                        aria-controls='kt_table_users'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '53.5px'}}
                        aria-label='50-69%: activate to sort column ascending'
                      >
                        50-69%
                      </th>
                      <th
                        className='sorting'
                        tabIndex={0}
                        aria-controls='kt_table_users'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '50.5px'}}
                        aria-label='70-79%: activate to sort column ascending'
                      >
                        70-79%
                      </th>
                      <th
                        className='sorting'
                        tabIndex={0}
                        aria-controls='kt_table_users'
                        rowSpan={1}
                        colSpan={1}
                        style={{width: '60px'}}
                        aria-label='80-100%: activate to sort column ascending'
                      >
                        80-100%
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className='odd'>
                      <td className='sorting_1'>AR</td>
                      <td>Schlensinger</td>
                      <td>Internal</td>
                      <td></td>
                      <td>5-9</td>
                      <td>5.39</td>
                      <td>4.02</td>
                      <td>3.15</td>
                      <td>2.47</td>
                      <td>1.98</td>
                      <td>1.74</td>
                      <td>1.62</td>
                    </tr>
                    <tr className='even'>
                      <td className='sorting_1'>AR</td>
                      <td>Schlensinger</td>
                      <td>Internal</td>
                      <td></td>
                      <td>10-14</td>
                      <td>6.09</td>
                      <td>4.57</td>
                      <td>3.81</td>
                      <td>3.07</td>
                      <td>2.39</td>
                      <td>2.13</td>
                      <td>2</td>
                    </tr>
                    <tr className='odd'>
                      <td className='sorting_1'>AR</td>
                      <td>Schlensinger</td>
                      <td>Internal</td>
                      <td></td>
                      <td>15-19</td>
                      <td>6.34</td>
                      <td>4.74</td>
                      <td>3.96</td>
                      <td>3.28</td>
                      <td>2.58</td>
                      <td>2.31</td>
                      <td>2.18</td>
                    </tr>
                    <tr className='even'>
                      <td className='sorting_1'>AR</td>
                      <td>Schlensinger</td>
                      <td>Internal</td>
                      <td></td>
                      <td>20-24</td>
                      <td>6.5</td>
                      <td>4.85</td>
                      <td>4.04</td>
                      <td>3.42</td>
                      <td>2.71</td>
                      <td>2.42</td>
                      <td>2.27</td>
                    </tr>
                    <tr className='odd'>
                      <td className='sorting_1'>AR</td>
                      <td>Schlensinger</td>
                      <td>Internal</td>
                      <td></td>
                      <td>25-30</td>
                      <td>7.06</td>
                      <td>5.5</td>
                      <td>4.55</td>
                      <td>4.12</td>
                      <td>3.36</td>
                      <td>3.03</td>
                      <td>2.71</td>
                    </tr>
                    <tr className='even'>
                      <td className='sorting_1'>AR</td>
                      <td>GO Branded</td>
                      <td>Internal</td>
                      <td></td>
                      <td>5-9</td>
                      <td>5.39</td>
                      <td>4.02</td>
                      <td>3.15</td>
                      <td>2.47</td>
                      <td>1.98</td>
                      <td>1.74</td>
                      <td>1.62</td>
                    </tr>
                    <tr className='odd'>
                      <td className='sorting_1'>AR</td>
                      <td>GO Branded</td>
                      <td>Internal</td>
                      <td></td>
                      <td>10-14</td>
                      <td>6.09</td>
                      <td>4.57</td>
                      <td>3.81</td>
                      <td>3.07</td>
                      <td>2.39</td>
                      <td>2.13</td>
                      <td>2</td>
                    </tr>
                    <tr className='even'>
                      <td className='sorting_1'>AR</td>
                      <td>GO Branded</td>
                      <td>Internal</td>
                      <td></td>
                      <td>15-19</td>
                      <td>6.34</td>
                      <td>4.74</td>
                      <td>3.96</td>
                      <td>3.28</td>
                      <td>2.58</td>
                      <td>2.31</td>
                      <td>2.18</td>
                    </tr>
                    <tr className='odd'>
                      <td className='sorting_1'>AR</td>
                      <td>GO Branded</td>
                      <td>Internal</td>
                      <td></td>
                      <td>20-24</td>
                      <td>6.5</td>
                      <td>4.85</td>
                      <td>4.04</td>
                      <td>3.42</td>
                      <td>2.71</td>
                      <td>2.42</td>
                      <td>2.27</td>
                    </tr>
                    <tr className='even'>
                      <td className='sorting_1'>AR</td>
                      <td>GO Branded</td>
                      <td>Internal</td>
                      <td></td>
                      <td>25-30</td>
                      <td>7.06</td>
                      <td>5.5</td>
                      <td>4.55</td>
                      <td>4.12</td>
                      <td>3.36</td>
                      <td>3.03</td>
                      <td>2.71</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-12 col-md-5'>
                <div
                  className='dataTables_info'
                  id='kt_table_users_info'
                  role='status'
                  aria-live='polite'
                >
                  Showing 1 to 10 of 680 entries
                </div>
              </div>
              <div className='col-sm-12 col-md-7'>
                <div
                  className='dataTables_paginate paging_simple_numbers'
                  id='kt_table_users_paginate'
                >
                  <ul className='pagination'>
                    <li
                      className='paginate_button page-item previous disabled'
                      id='kt_table_users_previous'
                    >
                      <a
                        href='#'
                        aria-controls='kt_table_users'
                        data-dt-idx='0'
                        tabIndex={0}
                        className='page-link'
                      >
                        Previous
                      </a>
                    </li>
                    <li className='paginate_button page-item active'>
                      <a
                        href='#'
                        aria-controls='kt_table_users'
                        data-dt-idx='1'
                        tabIndex={0}
                        className='page-link'
                      >
                        1
                      </a>
                    </li>
                    <li className='paginate_button page-item '>
                      <a
                        href='#'
                        aria-controls='kt_table_users'
                        data-dt-idx='2'
                        tabIndex={0}
                        className='page-link'
                      >
                        2
                      </a>
                    </li>
                    <li className='paginate_button page-item '>
                      <a
                        href='#'
                        aria-controls='kt_table_users'
                        data-dt-idx='3'
                        tabIndex={0}
                        className='page-link'
                      >
                        3
                      </a>
                    </li>
                    <li className='paginate_button page-item '>
                      <a
                        href='#'
                        aria-controls='kt_table_users'
                        data-dt-idx='4'
                        tabIndex={0}
                        className='page-link'
                      >
                        4
                      </a>
                    </li>
                    <li className='paginate_button page-item '>
                      <a
                        href='#'
                        aria-controls='kt_table_users'
                        data-dt-idx='5'
                        tabIndex={0}
                        className='page-link'
                      >
                        5
                      </a>
                    </li>
                    <li className='paginate_button page-item disabled' id='kt_table_users_ellipsis'>
                      <a
                        href='#'
                        aria-controls='kt_table_users'
                        data-dt-idx='6'
                        tabIndex={0}
                        className='page-link'
                      >
                        …
                      </a>
                    </li>
                    <li className='paginate_button page-item '>
                      <a
                        href='#'
                        aria-controls='kt_table_users'
                        data-dt-idx='7'
                        tabIndex={0}
                        className='page-link'
                      >
                        68
                      </a>
                    </li>
                    <li className='paginate_button page-item next' id='kt_table_users_next'>
                      <a
                        href='#'
                        aria-controls='kt_table_users'
                        data-dt-idx='8'
                        tabIndex={0}
                        className='page-link'
                      >
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RateCardTable
