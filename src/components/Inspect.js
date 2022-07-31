import React from "react";
import Progressbar from './Progressbar';

const display = false;

function chk(){
  display = true;
}

function Inspect() {
  return (
    <div class="container">
      <div class="search-box">
        <input type="text" class="search-input" placeholder="Search.." />
        <button class="search-button" onClick={chk()}>
          <i class="fas fa-search"></i>
        </button>
        {
          display && 
          <>
            <h3 className="heading">Progress Report</h3>
            <Progressbar bgcolor="#99ccff" progress='55'  height={30} />
            <table border="1">
				      <thead>
					      <tr>
						      <th>code</th>
						      <th>col_offset</th>
						      <th>filename</th>
						      <th>issue_confidence</th>
						      <th>issue_cwe</th>
						      <th>issue_severity</th>
						      <th>issue_text</th>
						      <th>line_number</th>
						      <th>line_range</th>
						      <th>more_info</th>
						      <th>test_id</th>
						      <th>test_name</th>
					      </tr>
				      </thead>
				      <tbody>
					      <tr>
						    <td>40 # SECURITY WARNING: keep the secret key used in production secret!
41 SECRET_KEY = "django-insecure-pj)dwdn$)olnidti7^kkx80)-zfvtzpm4m=^^uz1dcpi_&fn@!"
42 
43 # SECURITY WARNING: don't run with debug turned on in production!
44 DEBUG = True
                </td>
						    <td>13</td>
						    <td>.\bruteForce_web01\notes\settings.py</td>
						    <td>MEDIUM</td>
						    <td>259|https://cwe.mitre.org/data/definitions/259.html</td>
						    <td>LOW</td>
						    <td>Possible hardcoded password: 'django-insecure-pj)dwdn$)olnidti7^kkx80)-zfvtzpm4m=^^uz1dcpi_&fn@!'</td>
						    <td>41</td>
						    <td>41,42,43</td>
						    <td>https://bandit.readthedocs.io/en/1.7.4/plugins/b105_hardcoded_password_string.html</td>
						    <td>B105</td>
						    <td>hardcoded_password_string</td>
					      </tr>
					      <tr>
						    <td></td>
						    <td>&nbsp</td>
						    <td>&nbsp</td>
						    <td>&nbsp</td>
						    <td>&nbsp</td>
						    <td>&nbsp</td>
						    <td>&nbsp</td>
						    <td>&nbsp</td>
						    <td>&nbsp</td>
						    <td>&nbsp</td>
						    <td>&nbsp</td>
						    <td>&nbsp</td>
  					    </tr>
	  			    </tbody>
		      	</table>
          </>
        }
      </div>
    </div>
  );
}

export default Inspect;
