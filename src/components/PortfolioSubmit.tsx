import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link2, Loader2 } from "lucide-react";
import { createPortfolio } from "@/api/mockApi";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { addProfile } from "@/redux/counterSlice";
import { useNavigate } from "react-router-dom";

const PortfolioSubmit = () => {
  const [portfolioUrl, setPortfolioUrl] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!portfolioUrl) {
      setError("Please enter a portfolio URL");
      return;
    }

    try {
      new URL(portfolioUrl);
    } catch {
      setError("Please enter a valid URL");
      return;
    }

    setIsLoading(true);

    try {
        const portfolio = await createPortfolio(portfolioUrl)
        dispatch(addProfile(portfolio));
        navigate(`/${portfolio.extractedData.basicInfo.username}`)
    } catch (err: unknown) {
      if (err instanceof Error) console.error(err.message);
      else console.error("An unknown error occurred", err);

      setError("Failed to process portfolio. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-start pl-6 mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Creative Portfolio Platform
          </h1>
          <p className="text-xl text-muted-foreground">
            Transform your external portfolio into a professional one
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Link2 className="h-5 w-5 text-primary" />
              Submit Your Portfolio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="portfolioUrl">Portfolio URL</Label>
                <Input
                  id="portfolioUrl"
                  type="url"
                  placeholder="https://your-portfolio.com"
                  value={portfolioUrl}
                  onChange={(e) => setPortfolioUrl(e.target.value)}
                  disabled={isLoading}
                  className="text-base"
                />
                <p className="text-sm text-muted-foreground">
                  Enter the URL to your external portfolio (Canva, Behance,
                  personal website, etc.)
                </p>
                {error && <p className="text-sm text-red-600">{error}</p>}
              </div>

              <Button
                type="submit"
                className="w-full h-12 text-base"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Extracting Portfolio...
                  </>
                ) : (
                  "Extract Portfolio Data"
                )}
              </Button>

              <div className="pt-6 border-t border-gray-200">
                <p className="text-sm mb-3">Try these example portfolios:</p>
                <div className="space-y-2 flex flex-col">
                    <button
                        onClick={() => setPortfolioUrl('https://sonuchoudhary.my.canva.site/portfolio')}
                        className="w-fit text-left text-sm text-gray-600 hover:text-primary-700 p-2 cursor-pointer"
                        disabled={isLoading}
                    >
                        sonuchoudhary.my.canva.site/portfolio
                    </button>
                    <button
                        onClick={() => setPortfolioUrl('https://dellinzhang.com/video-edit')}
                        className="w-fit text-left text-sm text-gray-600 hover:text-primary-700 p-2 cursor-pointer"
                        disabled={isLoading}
                    >
                        dellinzhang.com/video-edit
                    </button>
                </div>
            </div>
            </form>
            
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PortfolioSubmit;
