from app import db,ma
# from datetime import datetime


class Articles(db.Model):
    __table_args__ = {'extend_existing':True}
    id = db.Column(db.Integer, primary_key=True)
    noun1 = db.Column(db.String(100),nullable=False)
    noun2 = db.Column(db.String(100),nullable=False)
    # date = db.Column(db.DateTime(), default=datetime.utcnow)


    def __repr__(self):
        return "<The two nouns are %r>" % self.noun1

# db.create_all()
# db.session.commit()

# Generate marshmallow Schemas from your models
class ArticlesShema(ma.Schema):
    class Meta:
        # Fields to expose
        fields = ("id", "noun1", "noun2")


article_schema = ArticlesShema()
articles_schema = ArticlesShema(many=True)