const server = Deno.run({
	cmd: ["deno", "run", "-A", "main.tsx"],
	stdout: "null",
	stderr: "null",
});

await new Promise((r) => setTimeout(r, 1500));

try {
	await Deno.remove("docs", { recursive: true });
} catch (_) {}

await Deno.run({
	cmd: [
		"wget",
		"--mirror",
		"--convert-links",
		"--adjust-extension",
		"--page-requisites",
		"--no-parent",
		"--directory-prefix=docs",
		"http://localhost:8000",
	],
}).status();

const src = "docs/localhost:8000";
for await (const entry of Deno.readDir(src)) {
	await Deno.rename(`${src}/${entry.name}`, `docs/${entry.name}`);
}
await Deno.remove(src);

console.log("done");
server.kill(15);
