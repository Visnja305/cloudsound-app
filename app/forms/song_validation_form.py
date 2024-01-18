from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed, FileRequired, DataRequired
from wtforms import SubmitField, StringField
from ..api.s3buckets import ALLOWED_EXTENSIONS

class SongForm(FlaskForm):
    song = FileField("Song File", validators=[FileRequired(), FileAllowed(list(ALLOWED_EXTENSIONS))])
    title = StringField('Title', validators=[DataRequired()])
    artist = StringField('Artist', validators=[DataRequired()])
    genre = StringField('Genre')
    submit = SubmitField("Create Post")