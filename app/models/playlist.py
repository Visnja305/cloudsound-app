from .db import db, environment, SCHEMA, add_prefix_for_prod

class Playlist(db.Model):
	__tablename__ = 'playlists'

	if environment == "production":
		__table_args__ = {'schema': SCHEMA}

	id = db.Column(db.Integer, primary_key=True)
	title = db.Column(db.String(60), nullable=False)

	user = db.relationship('User', back_populates='playlists')
	songs = db.relationship('Song', secondary="playlist_songs", back_populates='playlists')