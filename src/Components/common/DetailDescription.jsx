import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

// Matches bare URLs in the free-text descriptions. Trailing punctuation is
// trimmed separately so sentence-ending periods don't become part of the href.
const URL_PATTERN = /https?:\/\/[^\s<>"')\]]+/gi;

const trimTrailingPunctuation = (url) => url.replace(/[.,;:)\]]+$/, '');

// Picks an icon + short label per link so the chip row is scannable
// without the user having to read the whole URL.
const describeLink = (url) => {
    let host = '';
    try {
        host = new URL(url).hostname.replace(/^www\./, '');
    } catch {
        host = url;
    }

    if (host.includes('github.com')) return { label: 'GitHub', icon: <GitHubIcon /> };
    if (host.includes('kaggle.com')) return { label: 'Kaggle', icon: <LaunchIcon /> };
    if (host.includes('learn.nvidia.com') || host.includes('nptel')) {
        return { label: 'Credential', icon: <WorkspacePremiumOutlinedIcon /> };
    }
    if (host.includes('coursera') || host.includes('udemy') || host.includes('skillsnetwork')) {
        return { label: 'Certificate', icon: <WorkspacePremiumOutlinedIcon /> };
    }
    if (host.includes('sifisheriessciences') || host.includes('journal')) {
        return { label: 'Publication', icon: <ArticleOutlinedIcon /> };
    }
    if (host.includes('play.google.com') || host.includes('adobesparkpost')) {
        return { label: 'Live App', icon: <LaunchIcon /> };
    }
    return { label: host, icon: <LinkIcon /> };
};

/*
 * Renders a description that may contain <br> markup and bare URLs.
 *
 * Long URLs inside prose cannot line-break, which forced horizontal page
 * overflow on narrow screens. So links are pulled out of the body and shown
 * as tappable chips in their own horizontally scrollable row, while the
 * remaining prose wraps normally.
 */
export default function DetailDescription({ html, color = 'var(--color-text)', linkColor = 'var(--color-heading-sub)' }) {
    if (!html) return null;

    const raw = String(html);

    // Collect unique links, preserving the order they appear in the text.
    const found = raw.match(URL_PATTERN) || [];
    const links = [];
    found.forEach((match) => {
        const url = trimTrailingPunctuation(match);
        if (url && !links.includes(url)) links.push(url);
    });

    // Remove the URLs from the prose so nothing overflows, then tidy the
    // sentence fragments left behind. Order matters: brackets are closed up
    // first, then trailing connector phrases, then leftover punctuation.
    const LINE_END = '(?=\\s*(?:<br\\s*/?>|\\n|$))';
    let body = raw.replace(URL_PATTERN, '');
    body = body
        // Collapse brackets/parens that now hold only a label, e.g. "[Live Add-on  ]".
        .replace(/\[\s*([^\][]*?)\s*\]/g, (m, inner) => (inner.trim() ? inner.trim() : ''))
        .replace(/\(\s*\)/g, '')
        // Drop a whole line that was nothing but a "Code:" / "Credential:" pointer.
        .replace(new RegExp(`(?:^|(?<=<br\\s*/?>))\\s*[-–•]?\\s*(?:the\\s+)?(?:project\\s+)?(?:can\\s+be\\s+found|be\\s+found|found|available|credentials?|code|live\\s+link|live\\s+add-?on|github\\s+repository|repository|repo|deployed\\s+at\\s+live\\s+link|deployed|hosted\\s+using\\s+firebase\\s+here|source)\\s*(?:at|here|:|-|—|–)*\\s*${LINE_END}`, 'gi'), '')
        // Strip trailing connector words left mid-line after the URL was removed.
        .replace(new RegExp(`\\s*(?:can\\s+be\\s+found|be\\s+found|available|found)\\s*(?:at|here)?\\s*[:\\-—–]*\\s*${LINE_END}`, 'gi'), '')
        .replace(new RegExp(`\\s*(?:at|here)\\s*[:\\-—–]+\\s*${LINE_END}`, 'gi'), '')
        // Remove dangling punctuation / empty bullets at line ends.
        .replace(new RegExp(`\\s*[:,;\\-–—•]+\\s*${LINE_END}`, 'g'), '')
        .replace(new RegExp(`(?:^|(?<=<br\\s*/?>))\\s*[-–•]\\s*${LINE_END}`, 'g'), '')
        // Tidy double spaces and runs of blank lines created by the removals.
        .replace(/[ \t]{2,}/g, ' ')
        .replace(/(\s*<br\s*\/?>\s*){3,}/gi, '<br /><br />')
        .trim();

    return (
        <Box sx={{ width: '100%', minWidth: 0 }}>
            <Typography
                component="div"
                sx={{
                    fontFamily: 'var(--font-gilroy-light)',
                    color,
                    fontSize: { xs: '0.95rem', sm: '1.05rem' },
                    lineHeight: 1.7,
                    // Keep any stray long token from pushing the layout wide.
                    overflowWrap: 'anywhere',
                    wordBreak: 'break-word',
                    whiteSpace: 'pre-line',
                    '& br': { content: '""', display: 'block', marginBottom: '6px' },
                }}
                dangerouslySetInnerHTML={{ __html: body }}
            />

            {links.length > 0 && (
                <Box sx={{ mt: 2.5 }}>
                    <Typography
                        sx={{
                            fontFamily: 'var(--font-gilroy-bold)',
                            color: linkColor,
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            mb: 1,
                        }}
                    >
                        {links.length === 1 ? 'Link' : 'Links'}
                    </Typography>

                    {/* Horizontally scrollable so many links never widen the page. */}
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 1,
                            overflowX: 'auto',
                            pb: 1.2,
                            // Fade the right edge to hint that the row scrolls.
                            maskImage: 'linear-gradient(to right, #000 88%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to right, #000 88%, transparent 100%)',
                            '&::-webkit-scrollbar': { height: '6px' },
                            '&::-webkit-scrollbar-track': {
                                background: 'rgba(101, 48, 185, 0.08)',
                                borderRadius: '3px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: 'rgba(101, 48, 185, 0.4)',
                                borderRadius: '3px',
                                '&:hover': { background: 'rgba(101, 48, 185, 0.65)' },
                            },
                        }}
                    >
                        {links.map((url) => {
                            const { label, icon } = describeLink(url);
                            return (
                                <Chip
                                    key={url}
                                    icon={icon}
                                    label={label}
                                    component="a"
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    clickable
                                    title={url}
                                    sx={{
                                        flexShrink: 0,
                                        maxWidth: 260,
                                        fontFamily: 'var(--font-gilroy-bold)',
                                        fontSize: '0.82rem',
                                        color: '#fff',
                                        background: 'linear-gradient(135deg, #6a1b9a 0%, #8e24aa 60%, #d81b60 100%)',
                                        boxShadow: '0 6px 16px rgba(106, 27, 154, 0.28)',
                                        '& .MuiChip-icon': { color: '#fff' },
                                        '&:hover': {
                                            background: 'linear-gradient(135deg, #8e24aa 0%, #ad1457 100%)',
                                            boxShadow: '0 10px 22px rgba(106, 27, 154, 0.4)',
                                        },
                                    }}
                                />
                            );
                        })}
                    </Box>
                </Box>
            )}
        </Box>
    );
}
