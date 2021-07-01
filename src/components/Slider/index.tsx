import { WrapperSlider } from './styles'

type Props = {
  children: React.ReactNode
}

function Slider({ children }: Props) {
  const settings = {
    classnName: 'center',
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0
  }

  return <WrapperSlider {...settings}>{children}</WrapperSlider>
}

export default Slider
