export async function GET() {
    return Response.json({
        status: 200,
        body: {
            message: "OK",
        },
    });
}