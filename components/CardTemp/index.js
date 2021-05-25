import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import Router from "next/router"

const CardTemp = () => {
  return (
    <div>
      <Card className="max-w-6xl mx-auto">
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/img/Ilnaz-Title.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            КАЗАНСКАЯ ТРАГЕДИЯ
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            На всю страну прогремела трагедия со стрельбой в Казани, разразившаяся накануне утром в школе №175. Самый
            страшный кошмар родителей воплотился наяву: большинство жертв преступника — дети. Примеры стрельбы в школах
            в России уже были, и их было немало, но по массовости жертв этот случай несопоставим ни с каким другим. Что
            подвигло казанского студента Ильназа Галявиева повторить безумный поступок керченского стрелка, кто его
            жертвы и что предшествовало трагедии?
          </Typography>
        </CardContent>
        <CardActions>
          <a
            className="w-36 h-8 block text-white bg-red-800 cursor-pointer text-center font-bold hover:bg-white hover:text-blue-700"
            style={{ lineHeight: "1.7rem", borderRadius: "30px" }}
            onClick={() => {
              Router.replace(`/kazan`)
            }}
          >
            Читать далее
          </a>
        </CardActions>
      </Card>

      <Card className="max-w-6xl mx-auto mt-32">
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="/img/hachaturyan.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style = {{textTransform: 'uppercase'}}>
            Дело сестёр Хачатурян
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Скоро в публикации
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default CardTemp
