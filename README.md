# Common Ground

A five-page student business club website: Home, About Us, Projects, Team, and Contact Us.

## Development

Requires Node.js 22.13+ and pnpm. Install with `pnpm install`, then run `pnpm dev`. Create a production build with `pnpm build`.

The site uses React, Vinext, and CSS with a Cloudflare-compatible production build. Shared navigation is in `components/navigation.tsx`, page content is in `app/`, and project names, leadership, and contact details are in `lib/club.ts`.

Contact links open the visitor’s email app with a prefilled subject; no contact submissions are stored or sent by a server. The contact page also accepts a valid project query parameter to prefill the email subject.

Common Ground is a working brand name. Project descriptions and the club mission are draft editorial copy based on the owner’s supplied project names. No meeting dates, membership counts, achievements, partnerships, or chapter status are asserted. Team names, roles, graduation years, and the contact email were supplied by the owner. The architectural image is original AI-generated imagery and does not depict the school or club facilities.

## Validation

Run `pnpm exec tsc --noEmit`, `pnpm lint`, and `pnpm build`. The initial delivery also checks the five routes, project inquiry, email links, image response, navigation, and missing-page response over HTTP.

Lint targets the authored site code; unmodified generated UI components and hooks are retained but are not used by this presentation site.

Navigation uses standard HTML anchors because Vinext client transitions failed in the hosted production build. This keeps all navigation usable even when JavaScript fails; the Next.js link preference lint rule is disabled intentionally.
