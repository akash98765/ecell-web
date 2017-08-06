<!--Name,Phone(number),roll,Email,Department(drop),Year(drop),Resume(file/textarea)-->
<html>
<head>
<link rel="stylesheet" type="text/css" href="design.css">
</head>
<body>
<span class="mandate">* for mandatory fields</span>
<form action="submit.php" method="post" enctype="multipart/form-data">
<fieldset>
<legend>Details</legend>
<p>
<label for="a">Name:
</label><input id="field1" type="text" name="name" onkeyup="showName(this.value)" autocomplete="off" required></input><span class="mandate">*</span>
<br>
<span id="name" style="color:red;"></span>
</p>
<p>
<label for="b">Phone:
</label><input id="field2" type="text" name="phone" onkeyup="showPhone(this.value)" autocomplete="off" required></input><span class="mandate">*</span>
<br>
<span id="phone"  style="color:red;"></span>
</p>
<p>
<label for="c">Roll:
</label><input id="field3" type="text" name="roll" onkeyup="showRoll(this.value)" autocomplete="off" required></input><span class="mandate">*</span><br>
<span id="roll"  style="color:red;"></span>
</p>
<p>
<label for="d">E-mail:
</label><input id="field4" type="text" name="email" onkeyup="showEmail(this.value)" autocomplete="off" required></input><span class="mandate">*</span>
<br>
<span id="email"  style="color:red;"></span>
</p>
<br>
<p>
<label for="e">Department:
</label><select name="dept" required>
<option value="EEE">EEE</option>
<option value="ECE">ECE</option>
<option value="Mech">Mechanical</option>
<option value="Chem">Chemical</option>
<option value="CSC">CSC</option>
<option value="Prod">Production</option>
<option value="Meta">Metallurgical</option>
</select><span class="mandate">*</span>
</p>
<br>
<p>
<label for="f">Year(Passing out):
</label><select name="year" required>
<option value="2017">2017</option>
<option value="2018">2018</option>
<option value="2019">2019</option>
</select><span class="mandate">*</span>
</p>
<br>
<p>
<label for="g">Resume:</label>
<textarea name="resume" maxlength="400"></textarea>
<br>
<input type="file" name="fileToUpload" id="fileToUpload">
</p>
</fieldset>
<input type="submit" name="submit" value="Submit"></input>
</form>
</body>
</html> 
