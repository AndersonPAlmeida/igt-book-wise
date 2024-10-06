import { cva, VariantProps } from 'class-variance-authority'
import Image from 'next/image'

const ImageContainerVariants = cva('relative rounded-lg overflow-hidden', {
  variants: {
    variant: {
      explorer: 'w-[108px] h-[152px]',
      home: 'w-[64px] h-[94px]',
      bookHighlight: 'w-[172px] h-[242px]',
    },
  },
  defaultVariants: {
    variant: 'explorer',
  },
})

interface ImageCoverProps extends VariantProps<typeof ImageContainerVariants> {
  imageSrc: string
}

export function ImageCover({ imageSrc, variant }: ImageCoverProps) {
  return (
    <div className={ImageContainerVariants({ variant })}>
      <Image src={imageSrc} fill={true} alt="capa do livro" />
    </div>
  )
}
