function savename() 
{
    docname = document.getElementById("document_name").value;
    document.getElementById("document_name_label").innerHTML = docname;
}

function bold()
{
    var target = document.getElementById("write_area");
    if( target.style.fontWeight == "bolder" ) {
        target.style.fontWeight = "normal";
        document.getElementById("bold_button").style.backgroundColor = "white";
    } 
    else 
    {
        target.style.fontWeight = "bolder";  
        document.getElementById("bold_button").style.backgroundColor = "aqua";
    }
}

function italics()
{
        var target = document.getElementById("write_area");
        if( target.style.fontStyle == "italic" ) {
            target.style.fontStyle = "normal";
            document.getElementById("italics_button").style.backgroundColor = "white";
        } else {
            target.style.fontStyle = "italic";
            document.getElementById("italics_button").style.backgroundColor = "aqua";
        }
}

function underline()
{
    var target = document.getElementById("write_area");
    if( target.style.textDecoration == "underline" ) {
        target.style.textDecoration = "none";
        document.getElementById("underline_button").style.backgroundColor = "white";
    } else {
        target.style.textDecoration = "underline";
        document.getElementById("underline_button").style.backgroundColor = "aqua";
    }   
}

function add_font_family()
{
    document.getElementById("write_area").style.fontFamily = document.getElementById("font_family_input").value;
}

function add_font_size()
{
    document.getElementById("write_area").style.fontSize = document.getElementById("font_size_input").value;
}

function add_font_color()
{
    document.getElementById("write_area").style.color = document.getElementById("font_color_input").value;
}

function delete_all()
{
   document.getElementById("write_area").value = " "; 
}

function backgroundcolor_save()
{
    document.getElementById("write_area").style.backgroundColor = document.getElementById("bgcolor_save_text").value;
}

function save_margins()
{
    rm = document.getElementById("rm").value;
    lm = document.getElementById("lm").value;
    tm = document.getElementById("tm").value;
    bm = document.getElementById("bm").value;

    document.getElementById("write_area").style.marginTop = tm;
    document.getElementById("write_area").style.marginLeft = lm;
    document.getElementById("write_area").style.marginRight = rm;
    document.getElementById("write_area").style.marginBottom = bm;
}

function find()
{
    var paragraph = document.getElementById("write_area").value;
        input = document.getElementById("find_text").value; 
        textIncludes = paragraph.includes(input);
    
    
    if (textIncludes === true) 
    {
        alert('Word has been found');
    }
    else 
    {
        alert('No matches found');
    }
}

function uppercase_word()
{
    word_total = document.getElementById("write_area").value;
    word_upper = word_total.toUpperCase();
    document.getElementById("write_area").value = word_upper;
}

function lowercase_word()
{
    word_total = document.getElementById("write_area").value;
    word_lower = word_total.toLowerCase();
    document.getElementById("write_area").value = word_lower;
}

function replace()
{
    text = document.getElementById("write_area").value;
    word1 = document.getElementById("word1").value;
    word2 = document.getElementById("word2").value;
    replaced_text = text.replace(word1, word2);
    document.getElementById("write_area").value = replaced_text;
}