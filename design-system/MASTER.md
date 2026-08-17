# Carl Adrian Gonzalbo — Portfolio Design System

## Intent
Minimal creative portfolio for web and visual design. The interface should feel authored, quiet, editorial, and tactile rather than template-driven.

## Visual direction
- Style: editorial minimalism / Swiss-inspired portfolio
- Palette: exactly two base colors — warm paper `#F2EFE7` and ink `#171714`
- Use opacity only to create hierarchy; do not introduce additional hues or gradients.
- Avoid glassmorphism, neon, purple/pink gradients, oversized decorative blobs, emoji icons, and generic dashboard cards.

## Typography
- Primary: Manrope
- Utility/meta: DM Mono
- Maximum two font families.
- Display headings are restrained: normally `clamp(3.2rem, 7vw, 7.5rem)`; section/project headings stay below display scale.
- Body copy: 16px minimum on desktop/mobile where possible; line-height 1.5.

## Layout
- Fluid spacing with generous negative space.
- 4vw desktop side gutters, 5vw mobile.
- Sections use a consistent top rule and compact numeric label.
- Project content is prioritized over decorative UI.
- Intentional horizontal scrolling is allowed only inside the Canva gallery because it is the requested interaction; the page itself must never horizontally overflow.

## Interaction
- Touch targets at least 44px.
- Every interactive element has visible hover/focus feedback.
- Canva cards open in an accessible full-screen lightbox; Escape and arrow keys work.
- Forge is the only external project link.
- Motion uses opacity/transform, typically 180–300ms for UI feedback and slower 600–800ms for editorial reveals.
- Always honor `prefers-reduced-motion`.

## Accessibility
- Semantic headings and landmarks.
- Descriptive alt text for portfolio images.
- Keyboard-accessible gallery and lightbox.
- Visible focus outlines.
- No hover-only functionality.
- Maintain readable contrast between ink and paper.

## Performance
- Lazy-load below-the-fold images.
- Reserve image space with fixed aspect ratios to reduce layout shift.
- Keep effects CSS-based and lightweight.

## Content hierarchy
1. Identity and concise positioning
2. Selected work
3. About / capabilities
4. Experience
5. Contact

## Anti-slop checklist
- No excessive giant text blocks.
- No unnecessary gradients.
- No fake metrics or filler claims.
- No repeated rounded cards.
- No decorative animation without interaction meaning.
- Keep copy short until final portfolio content is supplied.
