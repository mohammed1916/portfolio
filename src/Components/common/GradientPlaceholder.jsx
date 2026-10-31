import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/*
 * Shared fallback used wherever a card has no screenshot yet.
 * Keeps image-less entries looking intentional instead of broken.
 */
export default function GradientPlaceholder({ title, subtitle, height = 200, buzz })
{
    const buzzwords = buzz || 'AI • ML • Data • Vision • LLM • NLP • Kafka • FastAPI';

    return (
        <Box
            sx={{
                height,
                borderRadius: '10px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                px: 2,
                background: 'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 45%), linear-gradient(135deg, #6a1b9a 0%, #8e24aa 45%, #d81b60 100%)',
                color: '#fff',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: `"${buzzwords}"`,
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.72rem',
                    opacity: 0.18,
                    transform: 'rotate(-15deg) scale(1.15)',
                    letterSpacing: '1.4px',
                    fontWeight: 700,
                }
            }}
        >
            <Typography fontFamily="var(--font-gilroy-bold)" variant="h6" sx={{ position: 'relative', zIndex: 1, lineHeight: 1.25 }}>
                {title}
            </Typography>
            {subtitle && (
                <Typography
                    fontFamily="var(--font-gilroy-light)"
                    variant="caption"
                    sx={{ position: 'relative', zIndex: 1, mt: 0.5, opacity: 0.85 }}
                >
                    {subtitle}
                </Typography>
            )}
        </Box>
    );
}
