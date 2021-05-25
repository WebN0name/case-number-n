import YouTubeIcon from "@material-ui/icons/YouTube"

const Footer = () => {
  return (
    <div style={{ height: "120px" }} className="bg-black text-white flex items-center">
      <div className="container mx-auto flex items-center justify-between px-4">
        <p className="text-2xl">Дело под номером N</p>
        <a target="_blank" href="https://www.youtube.com/channel/UCpRqTrnHs2yFQ3yhezetL4Q">
          <YouTubeIcon style={{ fontSize: 40 }} />
        </a>
      </div>
    </div>
  )
}

export default Footer
