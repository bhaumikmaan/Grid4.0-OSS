import React, {useState} from "react";
import Progressbar from './Progressbar';
import JSONPretty from 'react-json-pretty';
import 'react-json-pretty/themes/monikai.css';

function Inspect() {
	const [display,setDisplay] = useState(false);
	function toggleDisplay(){
		setDisplay(true);
	}
	var data={
		"results": [
		  {
			"code": "40 # SECURITY WARNING: keep the secret key used in production secret!\n41 SECRET_KEY = \"django-insecure-pj)dwdn$)olnidti7^kkx80)-zfvtzpm4m=^^uz1dcpi_&fn@!\"\n42 \n43 # SECURITY WARNING: don't run with debug turned on in production!\n44 DEBUG = True\n",
			"col_offset": 13,
			"filename": ".\\bruteForce_web01\\notes\\settings.py",
			"issue_confidence": "MEDIUM",
			"issue_cwe": {
			  "id": 259,
			  "link": "https://cwe.mitre.org/data/definitions/259.html"
			},
			"issue_severity": "LOW",
			"issue_text": "Possible hardcoded password: 'django-insecure-pj)dwdn$)olnidti7^kkx80)-zfvtzpm4m=^^uz1dcpi_&fn@!'",
			"line_number": 41,
			"line_range": [
			  41,
			  42,
			  43
			],
			"more_info": "https://bandit.readthedocs.io/en/1.7.4/plugins/b105_hardcoded_password_string.html",
			"test_id": "B105",
			"test_name": "hardcoded_password_string"
		  }
		]
	  };
  return (
    <div class="container">
      <div class="search-box">
	  {console.log(display)}
        <input type="text" class="search-input" placeholder="Search.." />
        <button class="search-button" onClick={toggleDisplay}>
          <i class="fas fa-search"></i>
        </button>
		{console.log(display)}
        {
          display && 
          <>
		  <br></br><br></br>
            <h3 className="heading">Final Verdict</h3>
			<h4 class="green">This Repository is Safe to use!</h4>
            <div><Progressbar bgcolor="#01be47" progress='55'  height={30} /></div>
			<br />
			
            <h3 className="heading">Insights on vulnerabilities</h3>
			<br></br>
			{/* {JSON.stringify(data, null, 2) } */}
			<JSONPretty id="json-pretty" data={data}></JSONPretty>
            {/* <table className="tabler" border="1">
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
						    <td>"40 # SECURITY WARNING: keep the secret key used in production secret! 41 SECRET_KEY = "django-insecure-pj)dwdn$)olnidti7^kkx80)-zfvtzpm4m=^^uz1dcpi_&fn@! 42 43 # SECURITY WARNING: don't run with debug turned on in production! 44 DEBUG = True"
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
		      	</table> */}
          </>
        }
      </div>
    </div>
  );
}

export default Inspect;
