import Container from "../components/Container";

export default function Footer() {
  return (
    <footer className="bg-[#4DD6C7]/65">
      <Container className="py-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-extrabold text-[#062047]">Fine Line Paint</p>
            <p className="mt-2 text-sm text-[#062047]/90">
              Residential & commercial painting in Melbourne. Clean finish, fair price, friendly service.
            </p>
          </div>
          <div className="sm:text-right">
            <p className="text-sm font-semibold text-[#062047]">Contact:</p>
            <p className="mt-2 text-sm text-[#062047]/90">
              Phone: <span className="font-semibold">0493728769</span><br />
              Email: <span className="font-semibold">finelinepaintmelbourne@gmail.com</span>
            </p>
          </div>
        </div>

        <p className="mt-4 text-xs text-[#062047]/85">
          © 2026 Fine Line Painters. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
