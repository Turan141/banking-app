import { Box, Typography, Avatar as MuiAvatar, SvgIcon } from "@mui/material";

interface AvatarProps {
  name?: string; // User's name for the initials
  src?: string; // URL source
  srcSet?: string; // URL source set
  svg?: React.ReactNode; // SVG source
  alt: string;
  size?: string | number; // Optional size
}

export const CustomAvatar: React.FC<AvatarProps> = ({ name, src, srcSet, svg, alt, size = '36px' }) => {
  if (src) {
    return (
      <MuiAvatar
        alt={alt}
        src={src}
        srcSet={srcSet}
        sx={{ width: size, height: size }}
        loading='lazy'
      />
    );
  } else if (svg) {
    return (
      <MuiAvatar sx={{ width: size, height: size }}>
        <SvgIcon>{svg}</SvgIcon>
      </MuiAvatar>
    );
  } else if (name) {
    const initials = name
      .split(" ")
      .map((word) => word.charAt(0))
      .join("");
      
    return (
      <Box
        sx={{
          width: size,
          height: size,
          maxWidth: size,
          maxHeight: size,
          borderRadius: "50%",
          backgroundColor: "bgRear.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#ffffff",
        }}
      >
        <Typography variant='caption' sx={{ fontWeight: "400", fontSize: "16px" }}>
          {initials}
        </Typography>
      </Box>
    );
  } else {
    // Render a default Avatar if no src, svg, or name is provided
    return (
      <MuiAvatar alt={alt} sx={{ width: size, height: size }}>
        {/* You can add a default icon or text here */}
      </MuiAvatar>
    );
  }
};
