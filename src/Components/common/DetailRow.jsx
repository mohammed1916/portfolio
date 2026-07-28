import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

/*
 * Label + value pair for the detail pages.
 *
 * The old markup used a fixed flexDirection="row", so a long value could not
 * wrap under its label and pushed the card wider than the viewport. This
 * stacks on mobile and sits inline from `sm` up, and always allows the value
 * to break mid-token as a last resort.
 */
export default function DetailRow({ label, value, color = 'var(--color-heading-sub)', valueColor = 'var(--color-text)', children }) {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'flex-start', sm: 'baseline' },
                gap: { xs: 0.3, sm: 1 },
                width: '100%',
                minWidth: 0,
                mb: 1.2,
            }}
        >
            <Typography
                sx={{
                    fontFamily: 'var(--font-gilroy-bold)',
                    color,
                    fontWeight: 700,
                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                    flexShrink: 0,
                }}
            >
                {label}
            </Typography>
            {children ?? (
                <Typography
                    sx={{
                        fontFamily: 'var(--font-gilroy-light)',
                        color: valueColor,
                        fontSize: { xs: '0.95rem', sm: '1.05rem' },
                        minWidth: 0,
                        overflowWrap: 'anywhere',
                        wordBreak: 'break-word',
                    }}
                >
                    {value}
                </Typography>
            )}
        </Box>
    );
}
